import PageHeader from '@/components/page-header';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader className="my-8" />
      <main className="flex-grow">{children}</main>
      <footer className="mt-auto text-center py-9">Footer</footer>
    </div>
  );
}
