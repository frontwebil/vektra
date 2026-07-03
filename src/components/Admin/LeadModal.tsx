"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Modal } from "./Modal";
import { Lead } from "../../../generated/prisma/client";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  lead?: Lead | null;
}

export function LeadModal({ isOpen, onClose, lead }: LeadModalProps) {
  const router = useRouter();
  const isEdit = !!lead;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    status: "New",
  });

  useEffect(() => {
    if (lead) {
      setFormData({
        name: lead.name,
        phone: lead.phone,
        message: lead.message || "",
        status: lead.status,
      });
    } else {
      setFormData({ name: "", phone: "", message: "", status: "New" });
    }
  }, [lead, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast.error("Вкажіть ім'я та телефон");
      return;
    }

    setLoading(true);

    try {
      const url = isEdit ? `/api/leads/${lead.id}` : "/api/leads";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      toast.success(isEdit ? "Заявку оновлено" : "Заявку додано");
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
      title={isEdit ? "Редагувати заявку" : "Додати заявку"}
    >
      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="modal-form-group">
          <label>{"Ім'я"}</label>
          <input
            type="text"
            placeholder="Ім'я клієнта"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>

        <div className="modal-form-group">
          <label>Телефон</label>
          <input
            type="text"
            placeholder="+380..."
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>

        <div className="modal-form-group">
          <label>Повідомлення</label>
          <textarea
            placeholder="Текст повідомлення"
            rows={3}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
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
            <option value="Done">Done</option>
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
