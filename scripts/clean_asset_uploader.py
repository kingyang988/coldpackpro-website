def clean_asset_uploader():
    with open('asset-uploader.html', 'r', encoding='utf-8') as f:
        c = f.read()

    c = c.replace('<html lang="zh-CN">', '<html lang="en">')
    c = c.replace('<html lang="zh">', '<html lang="en">')
    c = c.replace('<title>ColdPackPro - 图片资源管理中心 (Asset Manager)</title>', '<title>ColdPackPro - Asset Manager</title>')
    c = c.replace('<span>图片资源管理中心</span>', '<span>Asset Manager</span>')
    c = c.replace('<span>← 返回官网首页</span>', '<span>← Back to Website</span>')
    c = c.replace('<h1 class="text-xl font-bold text-blue-950">官方原图快速替换与管理</h1>', '<h1 class="text-xl font-bold text-blue-950">Asset Management & Original Photo Replacement</h1>')
    c = c.replace('您在此处上传的任何图片将<strong>100%保留原始文件质量</strong>，直接写入服务器存储，立即在官网全站生效，并彻底杜绝任何 AI 重绘失真。', 'Uploaded photos retain <strong>100% original image quality</strong> without AI distortion, written directly to the server to update the site immediately.')
    c = c.replace('当前重点替换项', 'Featured Photo Slot')
    c = c.replace('1. 现代化厂房照片 (Factory)', '1. Modern Factory Facility Photo')
    c = c.replace('目标文件名：', 'Target Filename: ')
    c = c.replace('展示于：首页 Hero 右侧卡片 &amp; 关于我们“现代化厂房”板块', 'Displayed on: Homepage Hero Card &amp; About Us "Modern Facility"')
    c = c.replace('服务器当前实际展示图', 'Current Server Asset')
    c = c.replace('点击下方上传按钮即可用您的真实原图替换上方当前图', 'Click upload below to replace with your authentic factory photo')
    c = c.replace('上传新原图替换', 'Upload New Photo to Replace')
    c = c.replace('点击或将本地图片拖拽至此', 'Click or drag local image here')
    c = c.replace('支持 WebP, JPG, PNG 格式', 'Supports WebP, JPG, PNG formats')
    c = c.replace('选择本地原图', 'Choose Local File')
    c = c.replace('其他站点图片槽位 (可选替换)', 'Additional Site Image Slots (Optional)')
    c = c.replace('2. 自动化产线', '2. Automated Production Line')
    c = c.replace('3. 权威检测报告 (CNAS / DGM)', '3. Certification Report (CNAS / DGM)')
    c = c.replace('4. 定制相变蓄冷盒', '4. Custom PCM Ice Brick')
    c = c.replace('5. 硬壳冰盒全家福', '5. Rigid Ice Pack Family')
    c = c.replace('6. 复合凝胶冰袋', '6. Composite Gel Ice Pack')
    c = c.replace('7. 吸水蓄冷冰排', '7. Water-Activated Cooling Sheet')
    c = c.replace('选择替换图片', 'Replace Image')
    c = c.replace("statusEl.textContent = '⏳ 正在上传并替换服务器文件...';", "statusEl.textContent = '⏳ Uploading and updating server file...';")
    c = c.replace("statusEl.textContent = `✓ 上传成功！文件已保存为 ${targetFilename}，全站已实时更新。`;", "statusEl.textContent = `✓ Upload successful! File saved as ${targetFilename}. Updated sitewide.`;")
    c = c.replace("statusEl.textContent = '❌ 上传失败: ' + err.message;", "statusEl.textContent = '❌ Upload failed: ' + err.message;")

    with open('asset-uploader.html', 'w', encoding='utf-8') as f:
        f.write(c)

    import re
    pattern = re.compile(r'[\u4e00-\u9fa5]')
    matches = [(i, l.strip()) for i, l in enumerate(c.splitlines(), 1) if pattern.search(l)]
    print('Remaining Chinese in asset-uploader.html:', len(matches))
    for i, l in matches:
        print(f'  L{i}: {l[:100]}')

if __name__ == '__main__':
    clean_asset_uploader()
