function Resources() {
  const departments = [
    {
      name: "Information Technology",
      link: "/resources",
    },
    {
      name: "Computer Engineering",
      link: "/resources",
    },
    {
      name: "Civil",
      link: "/resources",
    },
    {
      name: "Mechanical",
      link: "/resources",
    },
    {
      name: "Automobile",
      link: "/resources",
    },
    {
      name: "Data Science",
      link: "/resources",
    },
    {
      name: "AIML",
      link: "/resources",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto p-5">
      <h1 className="font-bold text-4xl">
        Resources - Previous Year Question Papers
      </h1>

      <section className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 gap-5 mt-5">
        {departments.map((department) => (
          <a href={department.link} key={department.name}>
            <div className="border flex flex-col items-center justify-center p-5 hover:border-gray-400 dark:hover:border-white">
              <img
                src="https://engineering.saraswatikharghar.edu.in/wp-content/uploads/2023/06/9409201.png"
                alt="alt-img"
                className="w-16 h-16"
              />
              <p className="mt-2 text-center">{department.name}</p>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}

export default Resources;
