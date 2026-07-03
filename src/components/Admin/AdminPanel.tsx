"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import "./style.css";

interface AdminPanelProps {
  userName: string;
}

export function AdminPanel({ userName }: AdminPanelProps) {
  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <Image
            src="/Logo/Vektra-white.svg"
            width={140}
            height={50}
            alt="Vektra"
          />
        </div>

        <nav className="admin-sidebar-nav">
          <a href="/admin" className="admin-sidebar-link active">
            Дашборд
          </a>
          {/* Додай більше посилань за потреби */}
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-sidebar-user">
            <div className="admin-sidebar-avatar">
              {userName.charAt(0).toUpperCase()}
            </div>
            <span className="admin-sidebar-username">{userName}</span>
          </div>
          <button
            className="admin-sidebar-logout"
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
          >
            Вийти
          </button>
        </div>
      </aside>

      <main className="admin-content">
        <h1 className="admin-content-title">Дашборд</h1>
        <p className="admin-content-subtitle">
          Ласкаво просимо, {userName}! 👋
        </p>

        <div className="admin-content-cards">
          <div className="admin-card">
            <h3>Заявки</h3>
            <p>Управляйте лідами з контактної форми</p>
          </div>
          <div className="admin-card">
            <h3>Відгуки</h3>
            <p>Керуйте відгуками клієнтів</p>
          </div>
        </div>
      </main>
    </div>
  );
}
