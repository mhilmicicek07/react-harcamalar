import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  localStorage.clear();
});

test("varsayılan harcamalar listeye yüklenir", async () => {
  render(<App />);

  expect(await screen.findByText(/Araç Bakımı/i)).toBeInTheDocument();
  const harcamaBasliklari = await screen.findAllByRole("heading", {
    level: 2,
  });
  expect(harcamaBasliklari).toHaveLength(5);
});

test("kullanıcı yeni harcama ekleyebilir", async () => {
  render(<App />);

  await screen.findByText(/Araç Bakımı/i);

  await userEvent.type(screen.getByLabelText(/Başlık/i), "Test Harcaması");
  await userEvent.type(screen.getByLabelText(/Miktar/i), "125");
  await userEvent.type(screen.getByLabelText(/Tarih/i), "2024-05-20");
  await userEvent.click(screen.getByRole("button", { name: /Harcama Ekle/i }));

  expect(await screen.findByText("Test Harcaması")).toBeInTheDocument();
  expect(screen.getByText(/125/)).toBeInTheDocument();
});

test("Sil butonuna tıklanınca harcama listeden kalkar", async () => {
  render(<App />);

  const silButonlari = await screen.findAllByRole("button", { name: /Sil/i });
  await userEvent.click(silButonlari[0]);

  const guncelSilButonlari = await screen.findAllByRole("button", {
    name: /Sil/i,
  });
  expect(guncelSilButonlari).toHaveLength(silButonlari.length - 1);
});
