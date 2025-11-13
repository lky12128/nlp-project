"use client"

import Link from "next/link"
import { FC } from "react"
// import { ChatbotUISVG } from "../icons/chatbotui-svg" // 这行可以删掉或注释掉
import Image from "next/image" // <--- 1. 引入 Image 组件

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href="https://github.com/lky12128/nlp-project.git"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-2">
        {/* --- 2. 这里原本是 ChatbotUISVG，现在换成图片 --- */}
        <Image
          src="/BRIDGE_LOGO_TRANSPARENT.png" // 确保 public 文件夹里有这个图，或者改成 a.png
          alt="Bridge Logo"
          width={200}  // 侧边栏的 Logo 一般比较小，60-80px 比较合适
          height={130}
          className="rounded-md" // 可选：加个圆角
        />
      </div>

      {/* 你之前修改的文字保留 */}
      <div className="text-3xl font-bold tracking-wide">BRIDGE Review QA Chatbot</div>
    </Link>
  )
}