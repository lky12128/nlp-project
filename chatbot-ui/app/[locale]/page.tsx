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
        {/* 删掉 Image 组件，换成这个简单的 img 标签试试 */}
        <img
          src="/BRIDGE_LOGO_TRANSPARENT.png"
          alt="Test Logo"
          style={{ width: '100px', height: 'auto' }}
        />
      </div>

      {/* 你之前修改的文字保留 */}
      <div className="text-4xl font-bold tracking-wide">BRIDGE Review QA Chatbot</div>
    </Link>
  )
}