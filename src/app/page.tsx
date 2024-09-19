import Link from "next/link"

const Homepage = () => {
  return (
    <div className="max-h-screen  text-center justify-center">


      <div>
        <section
          className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
        >
          <div
            className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
          ></div>

          <div
            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
          >
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                On School <span className="text-sky-500 hover:bg-fYellow">Home Page</span>

                <strong className="block font-extrabold text-rose-500">THIS IS HOME PAGE </strong>
              </h1>

              <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                numquam ea!
              </p>

              <div className="p-2">
                <Link
                  className="group relative inline-block bg-sky-100 rounded-lg overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                  href="/admin"
                >
                  <span
                    className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
                  ></span>

                  <span
                    className="relative text-sm font-medium text-blue-950 transition-colors group-hover:text-white"
                  >
                    Go To Dashboard
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Homepage