export default ` <main>
        <div class="content">
            <h1>Contact Us</h1>

            <p>
                Have a question or suggestion? Send us a message using
                the form below.
            </p>

            <form id="contact-form">
                <label for="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                >

                <label for="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                >

                <label for="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write your message here"
                    required
                ></textarea>

                <button type="submit">Send Message</button>
            </form>

            <p id="form-response" aria-live="polite"></p>
        </div>
    </main>`