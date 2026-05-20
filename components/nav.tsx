export function Nav() {
  const links = [
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#process", label: "Process" },
    { href: "#thinking", label: "Thinking" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line-2 bg-[rgba(241,242,246,0.78)] py-[18px] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-[clamp(20px,4vw,56px)]">
        <a
          href="#"
          className="flex items-center gap-3 font-display text-[19px] font-semibold tracking-[-0.02em]"
        >
          <span className="relative inline-block h-8 w-8">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <circle cx="16" cy="16" r="15" fill="#27187E" />
              <path
                d="M9 22 L9 10 L23 22 L23 10"
                stroke="#AEB8FE"
                strokeWidth="2.4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Nexus Co
        </a>

        <nav className="hidden gap-9 text-[14px] font-medium tracking-[-0.01em] md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-ink after:transition-[width] after:duration-[350ms] after:ease-[cubic-bezier(0.6,0.2,0.2,1)] hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-[18px] py-[10px] text-[13px] font-medium tracking-[-0.01em] text-paper transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-ink-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-2" />
          Start a project
        </a>
      </div>
    </header>
  );
}
