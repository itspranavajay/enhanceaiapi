function SDK({ icon, to, name }: { icon: string; name: string; to?: string }) {
  return (
    <Link
      to={to}
      className="flex cursor-pointer items-center rounded-lg border border-secondary-700 p-2.5 text-inherit hover:border-primary hover:text-primary hover:no-underline"
    >
      <img src={icon} className="mr-2 h-7 w-7" />
      <span className="font-medium">{name}</span>
    </Link>
  );
}

export default function SDKs() {
  return (
    <section className="mx-auto mb-32 flex w-full max-w-5xl flex-col p-4 py-0">
      <span className="mb-2 uppercase tracking-wider text-text-400">
        API Documentation
      </span>

      <h3 className="mb-12 text-4xl">
        Generate images the way you want!
      </h3>

      <div>
        <h4 className="mb-2 text-2xl">EnhanceAI API</h4>

        <p className="mb-6 text-text-400">
          Our easy to use image generation API.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK
            name="REST API"
            to="/rest-api"
            icon="/static/landing-page/sdk-icons/rest.png"
          />
        </div>
      </div>
    </section>
  );
}
