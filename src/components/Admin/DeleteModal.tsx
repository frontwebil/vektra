"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Modal } from "./Modal";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "lead" | "testimonial";
  id: number | string;
  name: string;
}

export function DeleteModal({
  isOpen,
  onClose,
  type,
  id,
  name,
}: DeleteModalProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);

    try {
      const url =
        type === "lead" ? `/api/leads/${id}` : `/api/testimonials/${id}`;

      const res = await fetch(url, { method: "DELETE" });

      if (!res.ok) throw new Error();

      toast.success(
        type === "lead" ? "Заявку видалено" : "Відгук видалено",
      );
      router.refresh();
      onClose();
    } catch {
      toast.error("Помилка при видаленні");
    } finally {
      setLoading(false);
    }
  };

  const label = type === "lead" ? "заявку" : "відгук";

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Підтвердження видалення">
      <div className="modal-delete-content">
        <p>
          Ви впевнені, що хочете видалити {label} від <strong>{name}</strong>?
        </p>
        <p className="modal-delete-warning">Цю дію неможливо скасувати.</p>

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
            type="button"
            className="admin-btn admin-btn--danger"
            onClick={handleDelete}
            disabled={loading}
            data-cursor="hover"
          >
            {loading ? "Видаляю..." : "Видалити"}
          </button>
        </div>
      </div>
    </Modal>
  );
}
