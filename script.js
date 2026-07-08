// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Collect form data
            const formData = {
                facilityName: document.getElementById('facilityName').value,
                contactName: document.getElementById('contactName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                facilityType: document.getElementById('facilityType').value,
                message: document.getElementById('message').value,
                timestamp: new Date().toISOString()
            };

            // Send via email using a backend service
            // This uses a simple mailto approach with subject/body encoding
            // For production, integrate with your email service (SendGrid, Mailgun, AWS SES, etc.)
            
            const subject = `Precision Podiatry Group - Facility Consultation Request from ${formData.facilityName}`;
            const body = `
Facility Consultation Request
============================

Facility Name: ${formData.facilityName}
Contact Name: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
Facility Type: ${formData.facilityType}

Message:
${formData.message}

---
Submitted on: ${new Date(formData.timestamp).toLocaleString()}
            `.trim();

            // Show success message
            const submitButton = contactForm.querySelector('.btn-submit');
            const originalText = submitButton.textContent;

            // Log to console (for demonstration)
            console.log('Form Submission:', formData);

            // Attempt to send via a backend endpoint if available
            try {
                // Try to submit via a serverless function or email API
                const response = await fetch('/.netlify/functions/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        to: 'info@precisionpodiatrygroup.com',
                        subject: subject,
                        html: formatEmailHTML(formData)
                    })
                }).catch(() => null);

                if (response?.ok) {
                    showSuccess(submitButton, originalText);
                    contactForm.reset();
                } else {
                    // Fallback: try mailto
                    fallbackEmailSubmission(formData);
                    showSuccess(submitButton, originalText);
                    contactForm.reset();
                }
            } catch (error) {
                // Fallback to mailto
                fallbackEmailSubmission(formData);
                showSuccess(submitButton, originalText);
                contactForm.reset();
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

function formatEmailHTML(formData) {
    return `
        <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: #0C1D2D; color: white; padding: 20px; text-align: center; }
                    .content { background: #f5f5f5; padding: 20px; margin: 20px 0; }
                    .field { margin: 15px 0; }
                    .label { font-weight: bold; color: #AC883F; }
                    .value { color: #333; margin-top: 5px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Facility Consultation Request</h1>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">Facility Name</div>
                            <div class="value">${escapeHtml(formData.facilityName)}</div>
                        </div>
                        <div class="field">
                            <div class="label">Contact Name</div>
                            <div class="value">${escapeHtml(formData.contactName)}</div>
                        </div>
                        <div class="field">
                            <div class="label">Email</div>
                            <div class="value">${escapeHtml(formData.email)}</div>
                        </div>
                        <div class="field">
                            <div class="label">Phone</div>
                            <div class="value">${escapeHtml(formData.phone)}</div>
                        </div>
                        <div class="field">
                            <div class="label">Facility Type</div>
                            <div class="value">${escapeHtml(formData.facilityType)}</div>
                        </div>
                        <div class="field">
                            <div class="label">Message</div>
                            <div class="value">${escapeHtml(formData.message).replace(/\n/g, '<br>')}</div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `;
}

function fallbackEmailSubmission(formData) {
    const mailtoLink = `mailto:info@precisionpodiatrygroup.com?subject=${encodeURIComponent(`Precision Podiatry Group - Consultation Request from ${formData.facilityName}`)}&body=${encodeURIComponent(formatMailtoBody(formData))}`;
    window.location.href = mailtoLink;
}

function formatMailtoBody(formData) {
    return `
Facility Consultation Request
============================

Facility Name: ${formData.facilityName}
Contact Name: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
Facility Type: ${formData.facilityType}

Message:
${formData.message}

---
Submitted on: ${new Date().toLocaleString()}
    `.trim();
}

function showSuccess(button, originalText) {
    button.textContent = 'REQUEST SENT ✓';
    button.style.background = '#4CAF50';

    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 3000);
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and other elements
document.querySelectorAll('.service-card, .checkmark-item, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
