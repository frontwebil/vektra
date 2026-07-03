"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";
import "./style.css";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ login: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.login || !formData.password) {
      toast.error("Введіть логін та пароль");
      return;
    }

    setLoading(true);

    try {
      const result = await signIn("credentials", {
        login: formData.login,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Невірний логін або пароль");
        return;
      }

      toast.success("Успішний вхід!");
      router.push("/admin");
      router.refresh();
    } catch {
      toast.error("Сталася помилка. Спробуйте ще раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">
          <Image
            src="/Logo/Vektra-white.svg"
            width={180}
            height={60}
            alt="Vektra"
          />
        </div>

        <div className="login-card">
          <h1 className="login-title">Вхід в адмін-панель</h1>
          <p className="login-subtitle">
            Введіть свої дані для доступу до панелі управління
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form-group">
              <label htmlFor="login">Логін</label>
              <input
                type="text"
                id="login"
                placeholder="Введіть логін"
                autoComplete="username"
                value={formData.login}
                onChange={(e) =>
                  setFormData({ ...formData, login: e.target.value })
                }
              />
            </div>

            <div className="login-form-group">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                id="password"
                placeholder="Введіть пароль"
                autoComplete="current-password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="login-button"
              disabled={loading}
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "Зачекайте..." : "Увійти"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
