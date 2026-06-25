import './globals.css';
export const metadata = { title: 'Noting.us FairRentNYC Scaffold' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">{children}</div>
      </body>
    </html>
  );
}
