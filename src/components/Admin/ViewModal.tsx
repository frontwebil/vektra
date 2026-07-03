"use client";

import { Modal } from "./Modal";
import { Lead, Testimonials } from "../../../generated/prisma/client";

interface ViewLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  lead: Lead | null;
}

interface ViewTestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial: Testimonials | null;
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function ViewLeadModal({ isOpen, onClose, lead }: ViewLeadModalProps) {
  if (!lead) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Деталі заявки">
      <div className="view-modal-content">
        <div className="view-modal-row">
          <span className="view-modal-label">{"Ім'я"}</span>
          <span className="view-modal-value">{lead.name}</span>
        </div>
        <div className="view-modal-row">
          <span className="view-modal-label">Телефон</span>
          <span className="view-modal-value">{lead.phone}</span>
        </div>
        <div className="view-modal-row">
          <span className="view-modal-label">Статус</span>
          <span className="view-modal-value">
            <span
              className={`admin-badge ${
                lead.status === "New"
                  ? "admin-badge--new"
                  : lead.status === "Inactive"
                    ? "admin-badge--inactive"
                    : "admin-badge--done"
              }`}
            >
              {lead.status}
            </span>
          </span>
        </div>
        <div className="view-modal-row">
          <span className="view-modal-label">Дата</span>
          <span className="view-modal-value">{formatDate(lead.createdAt)}</span>
        </div>
        {lead.message && (
          <div className="view-modal-row view-modal-row--full">
            <span className="view-modal-label">Повідомлення</span>
            <p className="view-modal-text">{lead.message}</p>
          </div>
        )}
      </div>
    </Modal>
  );
}

export function ViewTestimonialModal({
  isOpen,
  onClose,
  testimonial,
}: ViewTestimonialModalProps) {
  if (!testimonial) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Деталі відгуку">
      <div className="view-modal-content">
        <div className="view-modal-row">
          <span className="view-modal-label">{"Ім'я"}</span>
          <span className="view-modal-value">{testimonial.name}</span>
        </div>
        {testimonial.category && (
          <div className="view-modal-row">
            <span className="view-modal-label">Категорія</span>
            <span className="view-modal-value">{testimonial.category}</span>
          </div>
        )}
        {testimonial.position && (
          <div className="view-modal-row">
            <span className="view-modal-label">Позиція</span>
            <span className="view-modal-value">{testimonial.position}</span>
          </div>
        )}
        <div className="view-modal-row">
          <span className="view-modal-label">Статус</span>
          <span className="view-modal-value">
            <span
              className={`admin-badge ${
                testimonial.status === "New"
                  ? "admin-badge--new"
                  : testimonial.status === "Inactive"
                    ? "admin-badge--inactive"
                    : "admin-badge--done"
              }`}
            >
              {testimonial.status}
            </span>
          </span>
        </div>
        <div className="view-modal-row">
          <span className="view-modal-label">Дата</span>
          <span className="view-modal-value">
            {formatDate(testimonial.createdAt)}
          </span>
        </div>
        <div className="view-modal-row view-modal-row--full">
          <span className="view-modal-label">Текст відгуку</span>
          <p className="view-modal-text">{testimonial.text}</p>
        </div>
      </div>
    </Modal>
  );
}
