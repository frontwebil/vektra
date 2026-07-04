"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Modal } from "./Modal";
import { Testimonials } from "../../../generated/prisma/client";

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial?: Testimonials | null;
}

export function TestimonialModal({
  isOpen,
  onClose,
  testimonial,
}: TestimonialModalProps) {
  const router = useRouter();
  const isEdit = !!testimonial;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    position: "",
    text: "",
    avatarUrl: "",
    status: "New",
  });

  useEffect(() => {
    if (testimonial) {
      setFormData({
        name: testimonial.name,
        category: testimonial.category || "",
        position: testimonial.position || "",
        text: testimonial.text,
        avatarUrl: testimonial.avatarUrl || "",
        status: testimonial.status,
      });
    } else {
      setFormData({
        name: "",
        category: "",
        position: "",
        text: "",
        avatarUrl: "",
        status: "New",
      });
    }
  }, [testimonial, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.text) {
      toast.error("Вкажіть ім'я та текст відгуку");
      return;
    }

    setLoading(true);

    try {
      const url = isEdit
        ? `/api/testimonials/${testimonial.id}`
        : "/api/testimonials";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      toast.success(isEdit ? "Відгук оновлено" : "Відгук додано");
      router.refresh();
      onClose();
    } catch {
      toast.error("Помилка при збереженні");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEdit ? "Редагувати відгук" : "Додати відгук"}
    >
      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="modal-form-group">
          <label>{"Ім'я"}</label>
          <input
            type="text"
            placeholder="Ім'я клієнта"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="modal-form-group">
          <label>Категорія</label>
          <input
            type="text"
            placeholder="Напр. Веб-розробка"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          />
        </div>

        <div className="modal-form-group">
          <label>Позиція (порядок)</label>
          <input
            type="number"
            placeholder="1, 2, 3..."
            min="1"
            value={formData.position}
            onChange={(e) =>
              setFormData({ ...formData, position: e.target.value })
            }
          />
        </div>

        <div className="modal-form-group">
          <label>Текст відгуку</label>
          <textarea
            placeholder="Текст відгуку"
            rows={4}
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          />
        </div>

        <div className="modal-form-group">
          <label>URL аватарки</label>
          <input
            type="text"
            placeholder="https://..."
            value={formData.avatarUrl}
            onChange={(e) =>
              setFormData({ ...formData, avatarUrl: e.target.value })
            }
          />
        </div>

        <div className="modal-form-group">
          <label>Статус</label>
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
          >
            <option value="New">New</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="modal-actions">
          <button
            type="button"
            className="admin-btn admin-btn--secondary"
            onClick={onClose}
            data-cursor="hover"
          >
            Скасувати
          </button>
          <button
            type="submit"
            className="admin-btn admin-btn--primary"
            disabled={loading}
            data-cursor="hover"
          >
            {loading ? "Зберігаю..." : isEdit ? "Зберегти" : "Додати"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
