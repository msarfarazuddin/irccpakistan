import Link from "next/link";

const socialLinks = [
  {
    href: "https://www.facebook.com/irccpakistan",
    label: "Facebook",
    icon: <FacebookIcon />,
  },
  {
    href: "https://instagram.com/irccpakistan?igshid=i7fclbk4863y",
    label: "Instagram",
    icon: <InstagramIcon />,
  },
  {
    href: "https://twitter.com/irccpakistan?lang=en",
    label: "Twitter",
    icon: <XIcon />,
  },
  {
    href: "https://www.youtube.com/watch?v=Ppfrn80dfzs",
    label: "YouTube",
    icon: <YouTubeIcon />,
  },
  {
    href: "https://www.tiktok.com/@drshahbazqazi",
    label: "Tiktok",
    icon: <Tiktok />,
  },
  {
    href: "https://www.snapchat.com/@irccpakistan",
    label: "Snapchat",
    icon: <Snapchat />,
  },
];

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen mt-[-100px] items-center justify-center bg-gradient-to-br from-[#eef7ff] via-white to-[#dcecff] px-4 py-16">
      <section className="w-full max-w-2xl  px-6 py-12 text-center  sm:px-10">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0E58A8] text-white">
          <CheckIcon />
        </div>

        <h1 className="mt-6 text-5xl lg:text-7xl font-semibold text-[#0B1B2B] sm:text-5xl">
          Thank You
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#5B6B7A] sm:text-base">
          Your form has been submitted successfully. Our team will contact you soon.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0E58A8] text-white transition hover:-translate-y-0.5 hover:bg-[#0b4a8e]"
            >
              <span className="h-5 w-5">{item.icon}</span>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#0E58A8] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#0b4a8e] sm:text-base"
          >
            Back To Home
          </Link>
        </div>
      </section>
    </main>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12H16l-.5 3h-2.5v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor">
      <path d="M18.3 2H21l-6.6 7.6L22 22h-6l-4.7-6.1L6 22H3l7.1-8.2L2 2h6.1l4.2 5.6L18.3 2zm-1 18h1.7L7.7 4H6L17.3 20z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.2 3.5 12 3.5 12 3.5s-7.2 0-9.4.6A3 3 0 0 0 .4 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .4 5.8 3 3 0 0 0 2.1 2.1c2.2.6 9.4.6 9.4.6s7.2 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.8 15.5V8.5l6.4 3.5z" />
      </svg>
  );
   }

   function Tiktok() {
  return (
    
      <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor">
        <path d="M14.5 3c.4 1.4 1.2 2.4 2.4 3.1 1 .6 2 .9 3.1.9V10c-1.6 0-3.1-.5-4.4-1.4v6.1a5.6 5.6 0 1 1-4.5-5.5v3c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5V3h2.9z" />
      </svg>
    );
   }
  
   function Snapchat() {
  return (
      <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor">
        <path d="M12 2c3.3 0 5.3 2.3 5.3 5.7v2c0 .4.2.8.5 1l1.2.8c.4.3.3.9-.2 1.1l-1.1.5c-.2.1-.4.4-.4.6.1 1.4 1 1.9 1 1.9-.5.8-1.7 1.2-2.9 1.3-.5 1.1-1.7 1.8-3.4 1.8s-2.9-.7-3.4-1.8c-1.2-.1-2.4-.5-2.9-1.3 0 0 .9-.5 1-1.9 0-.2-.1-.5-.4-.6l-1.1-.5c-.5-.2-.6-.8-.2-1.1l1.2-.8c.3-.2.5-.6.5-1v-2C6.7 4.3 8.7 2 12 2z" />
      </svg>
    );
 
  }
