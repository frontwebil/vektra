"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import "./style.css";
import { Lead, Testimonials } from "../../../generated/prisma/client";

export function AdminPanel({
  leeds,
  testimonials,
}: {
  leeds: Lead[];
  testimonials: Testimonials[];
}) {
  const newLeeds = leeds.filter((leed) => leed.status === "New");
  const allLeeds = leeds;
  const newTestimonials = testimonials.filter(
    (testimonial) => testimonial.status === "New",
  );
  const alltestimonials = testimonials;

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("uk-UA", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <a href="/admin" className="admin-sidebar-logo">
          <Image
            src="/Logo/Vektra-white.svg"
            width={140}
            height={50}
            alt="Vektra"
            data-cursor="hover"
          />
        </a>

        <nav className="admin-sidebar-nav">
          <a href="/admin" className="admin-sidebar-link " data-cursor="hover">
            Заявки
          </a>
          <a
            href="/admin"
            className="admin-sidebar-link active"
            data-cursor="hover"
          >
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
        <div className="admin-stats">
          <div className="admin-stat-card">
            <span className="admin-stat-value">{newLeeds.length}</span>
            <span className="admin-stat-label">Нових заявок</span>
          </div>
          <div className="admin-stat-card">
            <span className="admin-stat-value">{allLeeds.length}</span>
            <span className="admin-stat-label">Всього заявок</span>
          </div>
          <div className="admin-stat-card">
            <span className="admin-stat-value">{newTestimonials.length}</span>
            <span className="admin-stat-label">Нових відгуків</span>
          </div>
          <div className="admin-stat-card">
            <span className="admin-stat-value">{alltestimonials.length}</span>
            <span className="admin-stat-label">Всього відгуків</span>
          </div>
        </div>

        {/* Таблиця відгуків */}
        <div className="admin-section">
          <div className="admin-section-top">
            <h2 className="admin-section-title">## Відгуки</h2>
            
          </div>
          {alltestimonials.length === 0 ? (
            <p className="admin-empty">Відгуків поки немає</p>
          ) : (
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Ім`я</th>
                    <th>Категорія</th>
                    <th>Посада</th>
                    <th>Текст</th>
                    <th>Статус</th>
                    <th>Дата</th>
                  </tr>
                </thead>
                <tbody>
                  {alltestimonials.map((t) => (
                    <tr key={t.id}>
                      <td>{t.name}</td>
                      <td>{t.category || "—"}</td>
                      <td>{t.position || "—"}</td>
                      <td className="admin-table-message">{t.text}</td>
                      <td>
                        <span
                          className={`admin-badge ${
                            t.status === "New"
                              ? "admin-badge--new"
                              : "admin-badge--done"
                          }`}
                        >
                          {t.status}
                        </span>
                      </td>
                      <td className="admin-table-date">
                        {formatDate(t.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
