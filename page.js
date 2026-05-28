export default function SBPatilAcademics() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800">
      <header className="bg-green-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">S B Patil Pharmacy Indapur</h1>
            <p className="text-sm mt-1">Academics Portal</p>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-bold text-green-800 leading-tight">
            Welcome to Academic Portal
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            S B Patil Pharmacy Indapur provides quality pharmaceutical education with modern academic infrastructure, experienced faculty, and student-focused learning.
          </p>
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

      <footer className="bg-green-800 text-white py-6 text-center">
        <p>© 2026 S B Patil Pharmacy Indapur - Academics</p>
      </footer>
    </div>
  )
}
