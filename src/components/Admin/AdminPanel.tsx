"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import "./style.css";
import { Lead, Testimonials } from "../../../generated/prisma/client";
import { LeadModal } from "./LeadModal";
import { DeleteModal } from "./DeleteModal";
import { ViewLeadModal } from "./ViewModal";

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
  const [viewLead, setViewLead] = useState<Lead | null>(null);
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
          <a
            href="/admin/testimonials"
            className="admin-sidebar-link"
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

        <div className="admin-section">
          <div className="admin-section-top">
            <h2 className="admin-section-title">## Зявки</h2>
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
                    <th>{"Ім`я"}</th>
                    <th>Телефон</th>
                    <th>Повідомлення</th>
                    <th>Статус</th>
                    <th>Дата</th>
                    <th>Дії</th>
                  </tr>
                </thead>
                <tbody>
                  {allLeeds.map((leed) => (
                    <tr
                      key={leed.id}
                      className="admin-table-clickable"
                      onClick={() => setViewLead(leed)}
                      data-cursor="hover"
                    >
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
                              : leed.status === "Inactive"
                                ? "admin-badge--inactive"
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
                            onClick={(e) => {
                              e.stopPropagation();
                              setEditLead(leed);
                              setLeadModalOpen(true);
                            }}
                            data-cursor="hover"
                          >
                            ✏️
                          </button>
                          <button
                            className="admin-btn admin-btn--danger admin-btn--sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeleteModal({
                                open: true,
                                type: "lead",
                                id: leed.id,
                                name: leed.name,
                              });
                            }}
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

      <ViewLeadModal
        isOpen={!!viewLead}
        onClose={() => setViewLead(null)}
        lead={viewLead}
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
