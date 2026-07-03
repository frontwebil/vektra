"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import "./style.css";

export function AdminPanel() {
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
          <a
            href="/admin"
            className="admin-sidebar-link active"
            data-cursor="hover"
          >
            Заявки
          </a>
          <a href="/admin" className="admin-sidebar-link" data-cursor="hover">
            Відгуки
          </a>
        </nav>

        <div className="admin-sidebar-bottom">
          <button
            className="admin-sidebar-logout"
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            style={{ cursor: "default" }}
            data-cursor="hover"
          >
            Вийти
          </button>
        </div>
      </aside>

      <main className="admin-content">

      </main>
    </div>
  );
}
