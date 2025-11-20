/* Event Page */

export default function MissionPage() {
  return (
    <section className="mt-24 max-w-6xl mx-auto px-6">

  <div className="grid md:grid-cols-2 gap-8">
    <img
      src="/images/venue.png"
      className="w-full h-80 object-cover rounded-lg shadow-lg"
      alt="TEDx Venue"
      width = {300}
      height = {80}
    />

    <iframe
      className="w-full h-80 rounded-lg shadow-lg"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211.60101412560715!2d23.72800439304837!3d37.98336959386975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3aa9e26d71%3A0xee0ac971e1705f0d!2sBankeion!5e0!3m2!1sen!2sgr!4v1763656780819!5m2!1sen!2sgr"
      loading="lazy"
      allowFullScreen
    ></iframe>
  </div>
</section>


  );
}
