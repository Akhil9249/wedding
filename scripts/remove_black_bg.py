import os
from PIL import Image
import numpy as np
from collections import deque

def process_gif():
    input_path = r'C:\Users\akhil\Downloads\fountain_top_to_bottom_flow.gif'
    if not os.path.exists(input_path):
        input_path = r'src/assets/gif/fountain_transparent.gif'
    
    im = Image.open(input_path)
    print(f"Loaded {input_path}: {im.size}, {im.n_frames} frames")
    
    # We want to crop from top where bushes start (y=320) to where brush strokes end (y=708)
    crop_box = (0, 320, 402, 708) # width=402, height=388
    
    processed_frames = []
    durations = []
    
    for idx in range(im.n_frames):
        im.seek(idx)
        durations.append(im.info.get('duration', 90))
        rgba = im.convert('RGBA')
        arr = np.array(rgba)
        h, w, _ = arr.shape
        
        # 1. Flood fill from ALL outer boundaries to make all connected black background transparent
        visited = np.zeros((h, w), dtype=bool)
        q = deque()
        
        # Check all border pixels
        for x in range(w):
            if np.all(arr[0, x, :3] < 35):
                q.append((0, x))
                visited[0, x] = True
            if np.all(arr[h-1, x, :3] < 35):
                q.append((h-1, x))
                visited[h-1, x] = True
                
        for y in range(h):
            if np.all(arr[y, 0, :3] < 35) and not visited[y, 0]:
                q.append((y, 0))
                visited[y, 0] = True
            if np.all(arr[y, w-1, :3] < 35) and not visited[y, w-1]:
                q.append((y, w-1))
                visited[y, w-1] = True
                
        while q:
            y, x = q.popleft()
            arr[y, x, 3] = 0 # Transparent
            for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                ny, nx = y + dy, x + dx
                if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
                    # Black background threshold
                    # If pixel is very dark (black background)
                    if arr[ny, nx, 0] < 35 and arr[ny, nx, 1] < 35 and arr[ny, nx, 2] < 35:
                        visited[ny, nx] = True
                        q.append((ny, nx))
        
        # Also check any remaining pure black pixels in the cropped region outside artwork
        # Crop to the visible area
        cropped_arr = arr[320:708, 0:402]
        
        # Any remaining disconnected black background pixels at the bottom or top
        # For rows < 25 (top margin above fountain/bushes): any black pixel is transparent
        for y in range(min(25, cropped_arr.shape[0])):
            for x in range(cropped_arr.shape[1]):
                if cropped_arr[y, x, 0] < 35 and cropped_arr[y, x, 1] < 35 and cropped_arr[y, x, 2] < 35:
                    cropped_arr[y, x, 3] = 0
                    
        # For rows > 360 (bottom edge below brush strokes): any black pixel is transparent
        for y in range(max(0, cropped_arr.shape[0] - 25), cropped_arr.shape[0]):
            for x in range(cropped_arr.shape[1]):
                if cropped_arr[y, x, 0] < 40 and cropped_arr[y, x, 1] < 40 and cropped_arr[y, x, 2] < 40:
                    cropped_arr[y, x, 3] = 0
                    
        frame_img = Image.fromarray(cropped_arr)
        processed_frames.append(frame_img)
        
    print(f"Processed {len(processed_frames)} frames. Cropped size: {processed_frames[0].size}")
    
    # Save as high quality transparent GIF
    # To ensure transparency is preserved cleanly across all frames:
    gif_frames = []
    for p in processed_frames:
        alpha = p.split()[-1]
        # Quantize RGB colors
        p_rgb = p.convert('RGB').convert('P', palette=Image.Palette.ADAPTIVE, colors=254)
        # Transparent mask
        mask = Image.eval(alpha, lambda a: 255 if a <= 50 else 0)
        p_rgb.paste(255, mask)
        p_rgb.info['transparency'] = 255
        gif_frames.append(p_rgb)
        
    output_path = r'src/assets/gif/fountain_transparent.gif'
    gif_frames[0].save(
        output_path,
        save_all=True,
        append_images=gif_frames[1:],
        duration=durations,
        loop=0,
        disposal=2,
        transparency=255
    )
    print(f"Saved {output_path} successfully. Size: {gif_frames[0].size}")

if __name__ == '__main__':
    process_gif()

