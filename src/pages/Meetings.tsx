import '../styles/meetings.css';
import locationImage from '../static/location1.png';
import meetingImage from '../static/1.png';

const Meetings = () => {
  return (
    <section className="meeting-section">
      <section className="meeting-info">
        <img src={meetingImage} alt="Weekly Meetings" />
        <div className="meeting-description">
          <h2>Our Meetings</h2>
          <p>
            Our meetings are meditation-based gatherings that provide a welcoming and supportive environment.
            Each session includes time for quiet meditation, followed by an open space for sharing feelings,
            reflections on the meditation experience, readings, or personal stories of recovery.
            Everyone is welcome, and the atmosphere is one of compassion, acceptance, and mutual support.
            We encourage you to come as you are, without any prior experience in meditation or recovery.
          </p>
          <p>
            We often use and sell the book from{' '}
            <a
              href="https://drive.google.com/file/d/1Isotp-WlUedFJlKDqjpvO7uKgVsvX3J1/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recovery Dharma
            </a>{' '}
            during our meetings.
          </p>
          <p>Our meetings are open:</p>
          <strong>Every Friday of the month at 6:30 PM to 8:00 PM</strong>
        </div>
        <h2>Location</h2>
        <p className='location-name'><strong>Higashi Honganji Buddhist Temple</strong></p>
        <p className="address">Address: 254 Victoria St, Costa Mesa, CA 92627</p>
        <p className='address'>After parking follow to the entrance and turn to the right where have a sign write "OFFICE" go until the end of the hallway and walk up the stairs, turn left and walk until the room 5 where it's happen the meetings </p>
        <div className="location-image">
          <img src={locationImage} alt="Temple entrance" />
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.187487858718!2d-117.9252755236195!3d33.6518789807008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd3019899c263f%3A0x4129a6499291186!2s254+Victoria+St,+Costa+Mesa,+CA+92627!5e0!3m2!1sen!2sus!4v1732054167789!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Maps Location"
          />
        </div>
      </section>
    </section>
  );
};

export default Meetings;