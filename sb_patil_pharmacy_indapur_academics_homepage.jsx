export default function SBPatilAcademics() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800">
      <header className="bg-green-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">S B Patil Pharmacy Indapur</h1>
            <p className="text-sm mt-1">Academics Portal</p>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-green-200">Home</a>
            <a href="#about" className="hover:text-green-200">About</a>
            <a href="#courses" className="hover:text-green-200">Courses</a>
            <a href="#faculty" className="hover:text-green-200">Faculty</a>
            <a href="#notices" className="hover:text-green-200">Notices</a>
            <a href="#contact" className="hover:text-green-200">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-bold text-green-800 leading-tight">
            Welcome to Academic Portal
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            S B Patil Pharmacy Indapur provides quality pharmaceutical education with modern academic infrastructure, experienced faculty, and student-focused learning.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl shadow-lg">
              Admissions
            </button>
            <button className="border border-green-700 text-green-700 px-6 py-3 rounded-2xl">
              Academic Notices
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-green-100">
          <h3 className="text-2xl font-semibold text-green-800 mb-6">
            Academic Highlights
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li>✔ B.Pharm Program</li>
            <li>✔ Experienced Faculty Members</li>
            <li>✔ Modern Laboratories</li>
            <li>✔ Industrial Training Support</li>
            <li>✔ Examination & Academic Updates</li>
          </ul>
        </div>
      </section>

      <section id="about" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-green-800">About Institute</h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            The institute is committed to excellence in pharmaceutical education and aims to develop skilled healthcare professionals through academic excellence, innovation, and ethical practices.
          </p>
        </div>
      </section>

      <section id="courses" className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
            Courses Offered
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-green-700">B.Pharm</h3>
              <p className="mt-4 text-gray-600">
                Undergraduate pharmacy program focused on pharmaceutical sciences and healthcare.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-green-700">Industrial Training</h3>
              <p className="mt-4 text-gray-600">
                Industry exposure and practical pharmaceutical manufacturing training.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-green-700">Research Activities</h3>
              <p className="mt-4 text-gray-600">
                Student projects and pharmaceutical research initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faculty" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
            Faculty Members
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map((item) => (
              <div key={item} className="bg-green-50 rounded-3xl p-8 text-center shadow-md">
                <div className="w-24 h-24 mx-auto bg-green-200 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold">Faculty Name</h3>
                <p className="text-gray-600 mt-2">Department of Pharmacy</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="notices" className="py-16 bg-green-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-10">
            Latest Notices
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-lg">Internal Sessional Marks Notice</h3>
              <p className="text-gray-600 mt-2">
                Students are advised to verify their internal marks before the deadline.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-lg">Industrial Training Submission</h3>
              <p className="text-gray-600 mt-2">
                Submit industrial training reports to the department office.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-green-800">Contact Us</h2>
          <p className="mt-6 text-lg text-gray-600">
            S B Patil Pharmacy Indapur
          </p>
          <p className="text-gray-600 mt-2">Email: info@sbpatilpharmacy.edu.in</p>
          <p className="text-gray-600">Phone: +91 XXXXX XXXXX</p>
        </div>
      </section>

      <footer className="bg-green-800 text-white py-6 text-center">
        <p>© 2026 S B Patil Pharmacy Indapur - Academics</p>
      </footer>
    </div>
  )
}
