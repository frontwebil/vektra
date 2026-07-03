"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { Lead, Testimonials } from "../../../generated/prisma/client";
import { LeadModal } from "./LeadModal";
import { TestimonialModal } from "./TestimonialModal";
import { DeleteModal } from "./DeleteModal";
import "./style.css";

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

  // Modal state
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [editLead, setEditLead] = useState<Lead | null>(null);

  const [testimonialModalOpen, setTestimonialModalOpen] = useState(false);
  const [editTestimonial, setEditTestimonial] =
    useState<Testimonials | null>(null);

  const [deleteModal, setDeleteModal] = useState<{
    open: boolean;
    type: "lead" | "testimonial";
    id: number | string;
    name: string;
  }>({ open: false, type: "lead", id: 0, name: "" });

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
        {/* Статистика */}
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

        {/* Заявки */}
        <div className="admin-section">
          <div className="admin-section-header">
            <h2 className="admin-section-title">Заявки</h2>
            <button
              className="admin-btn admin-btn--primary"
              onClick={() => {
                setEditLead(null);
                setLeadModalOpen(true);
              }}
              data-cursor="hover"
            >
              + Додати
            </button>
          </div>
          {allLeeds.length === 0 ? (
            <p className="admin-empty">Заявок поки немає</p>
          ) : (
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Ім&apos;я</th>
                    <th>Телефон</th>
                    <th>Повідомлення</th>
                    <th>Статус</th>
                    <th>Дата</th>
                    <th>Дії</th>
                  </tr>
                </thead>
                <tbody>
                  {allLeeds.map((leed) => (
                    <tr key={leed.id}>
                      <td>{leed.name}</td>
                      <td>{leed.phone}</td>
                      <td className="admin-table-message">
                        {leed.message || "—"}
                      </td>
                      <td>
                        <span
                          className={`admin-badge ${
                            leed.status === "New"
                              ? "admin-badge--new"
                              : "admin-badge--done"
                          }`}
                        >
                          {leed.status}
                        </span>
                      </td>
                      <td className="admin-table-date">
                        {formatDate(leed.createdAt)}
                      </td>
                      <td>
                        <div className="admin-table-actions">
                          <button
                            className="admin-btn admin-btn--secondary admin-btn--sm"
                            onClick={() => {
                              setEditLead(leed);
                              setLeadModalOpen(true);
                            }}
                            data-cursor="hover"
                          >
                            ✏️
                          </button>
                          <button
                            className="admin-btn admin-btn--danger admin-btn--sm"
                            onClick={() =>
                              setDeleteModal({
                                open: true,
                                type: "lead",
                                id: leed.id,
                                name: leed.name,
                              })
                            }
                            data-cursor="hover"
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Відгуки */}
        <div className="admin-section">
          <div className="admin-section-header">
            <h2 className="admin-section-title">Відгуки</h2>
            <button
              className="admin-btn admin-btn--primary"
              onClick={() => {
                setEditTestimonial(null);
                setTestimonialModalOpen(true);
              }}
              data-cursor="hover"
            >
              + Додати
            </button>
          </div>
          {alltestimonials.length === 0 ? (
            <p className="admin-empty">Відгуків поки немає</p>
          ) : (
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Ім&apos;я</th>
                    <th>Категорія</th>
                    <th>Посада</th>
                    <th>Текст</th>
                    <th>Статус</th>
                    <th>Дата</th>
                    <th>Дії</th>
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
                      <td>
                        <div className="admin-table-actions">
                          <button
                            className="admin-btn admin-btn--secondary admin-btn--sm"
                            onClick={() => {
                              setEditTestimonial(t);
                              setTestimonialModalOpen(true);
                            }}
                            data-cursor="hover"
                          >
                            ✏️
                          </button>
                          <button
                            className="admin-btn admin-btn--danger admin-btn--sm"
                            onClick={() =>
                              setDeleteModal({
                                open: true,
                                type: "testimonial",
                                id: t.id,
                                name: t.name,
                              })
                            }
                            data-cursor="hover"
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Модалки */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => {
          setLeadModalOpen(false);
          setEditLead(null);
        }}
        lead={editLead}
      />

      <TestimonialModal
        isOpen={testimonialModalOpen}
        onClose={() => {
          setTestimonialModalOpen(false);
          setEditTestimonial(null);
        }}
        testimonial={editTestimonial}
      />

      <DeleteModal
        isOpen={deleteModal.open}
        onClose={() =>
          setDeleteModal({ open: false, type: "lead", id: 0, name: "" })
        }
        type={deleteModal.type}
        id={deleteModal.id}
        name={deleteModal.name}
      />
    </div>
  );
}
