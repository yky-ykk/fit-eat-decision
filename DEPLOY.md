# 部署到 Vercel

这个仓库已经是可部署结构。

## 步骤

1. 打开 https://vercel.com/
2. 使用 GitHub 账号登录。
3. 点击 `Add New Project`。
4. 选择 `yky-ykk/fit-eat-decision`。
5. Framework Preset 选择 `Other`。
6. Build Command 留空。
7. Output Directory 留空。
8. 点击 Deploy。

部署完成后会得到一个稳定公网链接。`/api/geo` 会在 Vercel 上读取粗略城市、地区、时区，用于轻量个性化提示。

## 隐私边界

页面只使用粗略城市/时区做提示，不展示完整 IP，不做疾病或医疗判断。
