$(document).ready(function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Header scroll effect
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }
    });
    
    // Mobile menu toggle
    $('.mobile-menu-btn').click(function() {
        $('.mobile-menu').toggleClass('active');
        // console.log('Mobile menu button clicked.');
        if ($('.mobile-menu').hasClass('active')) {
            // console.log('Menu is active. Hiding burger, showing cross.');
            $('.burger').css('display','none');
            $('.cross').css('display','block');
        } else {
            // console.log('Menu is inactive. Showing burger, hiding cross.');
            $('.burger').css('display','block');
            $('.cross').css('display','none');
        }
        // console.log('Burger display after toggle:', $('.burger').css('display'));
        // console.log('Cross display after toggle:', $('.cross').css('display'));
    });

    if ($('.mobile-menu').hasClass('active')) {
        $('.burger').css('display','none');
        $('.cross').css('display','block');
    } else {
        $('.burger').css('display','block');
        $('.cross').css('display','none');
    }
    
    // Close mobile menu when clicking on links
    $('.mobile-nav-link, .mobile-nav-btn').click(function() {
        $('.mobile-menu').removeClass('active');
        $('.mobile-menu-btn i').attr('data-lucide', 'menu');
        lucide.createIcons();
    });
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
    
    // Service card hover effects
    $('.service-card').hover(
        function() {
            $(this).find('.service-btn').css('opacity', '1');
        },
        function() {
            $(this).find('.service-btn').css('opacity', '0');
        }
    );
    
    // Service card click to enrollment
    $('.service-btn').click(function() {
        const serviceCard = $(this).closest('.service-card');
        const serviceId = serviceCard.data('service');
        window.location.href = `enrollment.html?course=${serviceId}`;
    });
    
    // Contact form submission
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        
        const form = $(this);
        const submitBtn = form.find('.contact-submit-btn');
        const submitText = submitBtn.find('.submit-text');
        const submitLoading = submitBtn.find('.submit-loading'); // Reverted selector
        
        // Show loading state
        submitBtn.prop('disabled', true);
        submitText.hide();
        submitLoading.show();
        $('#contact-submitting').show(); // This element is not in the provided HTML, consider removing or adding.
        $('#contact-success, #contact-error').hide();
        
        // Prepare form data
        const formData = new URLSearchParams();
        form.serializeArray().forEach(function(item) {
            formData.append(item.name, item.value);
        });
        
        // Google Apps Script URL for contact form
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbysYTfudKkcK0Atl8EobF_O0pOxxIH7szkeAKJrCLfSp-TWs928BgqPysstHeOGVMjG/exec';
        
        // Submit form
        fetch(scriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        })
        .then(() => {
            // Show success message
            $('#contact-submitting').hide(); // This element is not in the provided HTML, consider removing or adding.
            $('#contact-success').show();
            form[0].reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                $('#contact-success').hide();
            }, 5000);
        })
        .catch(() => {
            // Show error message
            $('#contact-submitting').hide(); // This element is not in the provided HTML, consider removing or adding.
            $('#contact-error').show();
            
            // Hide error message after 5 seconds
            setTimeout(() => {
                $('#contact-error').hide();
            }, 5000);
        })
        .finally(() => {
            // Reset button state
            submitBtn.prop('disabled', false);
            submitText.show();
            submitLoading.hide();
        });
    });
    
    // Consultation form submission
    $('#consultation-form').submit(function(e) {
        e.preventDefault();
        
        const form = $(this);
        const submitBtn = form.find('.consultation-submit-btn');
        const submitText = submitBtn.find('.submit-text');
        const submitLoading = submitBtn.find('.submit-loading'); // Reverted selector
        
        // Show loading state
        submitBtn.prop('disabled', true);
        submitText.hide();
        submitLoading.show();
        
        // Prepare form data
        const formData = new URLSearchParams();
        form.serializeArray().forEach(function(item) {
            formData.append(item.name, item.value);
        });
        
        // Google Apps Script URL for consultation form
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbzspAAiZMeZQydb_bsGsQGYqFiIu2NC133SNibHiaqLbfBvUlFhkOUbTuuccPRgjq6LSQ/exec';
        
        // Submit form
        fetch(scriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        })
        .then(() => {
            // Show success message
            $('#consultation-success').show();
            $('.consultation-form-container').hide();
        })
        .catch(() => {
            // Show error message
            $('#consultation-error').show();
        })
        .finally(() => {
            // Reset button state
            submitBtn.prop('disabled', false);
            submitText.show();
            submitLoading.hide();
        });
    });

    // Records form submission
    $('#records-form').submit(function(e) {
        e.preventDefault();
        
        const form = $(this);
        const submitBtn = form.find('.records-submit-btn');
        const submitText = submitBtn.find('.submit-text');
        const submitLoading = submitBtn.find('.submit-loading'); // Reverted selector
        
        // Show loading state
        submitBtn.prop('disabled', true);
        submitText.hide();
        submitLoading.show();
        
        // Prepare form data
        const formData = new URLSearchParams();
        form.serializeArray().forEach(function(item) {
            formData.append(item.name, item.value);
        });
        
        // Google Apps Script URL for records form
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbzspAAiZMeZQydb_bsGsQGYqFiIu2NC133SNibHiaqLbfBvUlFhkOUbTuuccPRgjq6LSQ/exec';
        
        // Submit form
        fetch(scriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        })
        .then(() => {
            // Show success message
            $('#records-success').show();
            $('.records-form-container').hide();
        })
        .catch(() => {
            // Show error message
            $('#records-error').show();
        })
        .finally(() => {
            // Reset button state
            submitBtn.prop('disabled', false);
            submitText.show();
            submitLoading.hide();
        });
    });
    
    // Set minimum date for consultation form
    const today = new Date().toISOString().split('T')[0];
    $('#preferredDate').attr('min', today);
    
    // Enrollment page functionality
    if (window.location.pathname.includes('enrollment.html')) {
        // Course data
        const courses = {
            'beginner-trading': {
                name: 'Stock Market 101: Decode the Basics',
                price: 'NRs. 3000',
                duration: '8 weeks',
                students: '280'
            },
            'advanced-course': {
                name: 'Advance Course: Technical Analysis Mastery',
                price: 'NRs. 5000',
                duration: '12 weeks',
                students: '152'
            },
            'transformation-course': {
                name: 'Basic to Advance course: Complete Transformation Program',
                price: 'NRs. 10,000',
                duration: '6 weeks',
                students: '41'
            },
            'pro-course': {
                name: 'Pro Trader: Mastering the Market Moves',
                price: 'NRs. 12,000',
                duration: '10 weeks',
                students: '76'
            },
            'recovery-course': {
                name: 'From Loss to Profit: The Recovery Course',
                price: 'NRs. 15,000',
                duration: '10 weeks',
                students: '87'
            }
        };
        
        // Course selection functionality
        $('.enrollment-course').click(function() {
            const courseId = $(this).data('course');
            $('.enrollment-course').removeClass('selected');
            $(this).addClass('selected');
            $('#course-select').val(courseId);
            updateCourseSummary(courseId);
        });
        
        $('#course-select').change(function() {
            const courseId = $(this).val();
            $('.enrollment-course').removeClass('selected');
            if (courseId) {
                $(`.enrollment-course[data-course="${courseId}"]`).addClass('selected');
                updateCourseSummary(courseId);
            } else {
                $('#course-summary').hide();
            }
        });
        
        function updateCourseSummary(courseId) {
            if (courses[courseId]) {
                const course = courses[courseId];
                $('#selected-course-name').text(course.name);
                $('#selected-course-details').text(`${course.duration} • ${course.students} students`);
                $('#selected-course-price').text(course.price);
                $('#course-summary').show();
            } else {
                $('#course-summary').hide();
            }
        }
        
        // Pre-select course from URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const courseParam = urlParams.get('course');
        if (courseParam && courses[courseParam]) {
            $('#course-select').val(courseParam);
            $(`.enrollment-course[data-course="${courseParam}"]`).addClass('selected');
            updateCourseSummary(courseParam);
        }
        
        // Enrollment form submission
        $('#enrollment-form').submit(function(e) {
            e.preventDefault();
            
            const form = $(this);
            const submitBtn = form.find('.enrollment-submit-btn');
            const submitText = submitBtn.find('.submit-text');
            const submitLoading = submitBtn.find('.submit-loading'); // Reverted selector
            
            // Show loading state
            submitBtn.prop('disabled', true);
            submitText.hide();
            submitLoading.show();
            
            // Prepare form data
            const formData = new URLSearchParams();
            const formArray = form.serializeArray();
            
            formArray.forEach(function(item) {
                if (item.name === 'course') {
                    // Convert course ID to course name
                    const courseName = courses[item.value]?.name || item.value;
                    formData.append('course', courseName);
                    // Assuming firstName and lastName fields exist in the form
                    formData.append('name', `${$('input[name="firstName"]').val() || ''} ${$('input[name="lastName"]').val() || ''}`);
                    formData.append('subject', `New Enrollment for ${courseName}`);
                    formData.append('message', `Enrollment details for ${$('input[name="firstName"]').val() || ''} ${$('input[name="lastName"]').val() || ''}:\nEmail: ${$('input[name="email"]').val()}\nPhone: ${$('input[name="phone"]').val()}\nCourse: ${courseName}`);
                } else {
                    formData.append(item.name, item.value);
                }
            });
            
            // Google Apps Script URL for enrollment form
            const scriptUrl = 'https://script.google.com/macros/s/AKfycbyVH8yjgoqr0hsVp0vDC2oid_bVviRdiJo8SmGahoSlFufW2cBDcmriLIuCZP7MB9My/exec';
            
            // Submit form
            fetch(scriptUrl, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData.toString()
            })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    $('#enrollment-content').hide();
                    $('#enrollment-success').show();
                } else {
                    $('#enrollment-content').hide();
                    $('#enrollment-error').show();
                    $('#enrollment-error .enrollment-error-message').text(result.error || 'Enrollment failed. Please try again.');
                }
            })
            .catch(() => {
                $('#enrollment-content').hide();
                $('#enrollment-error').show();
            })
            .finally(() => {
                // Reset button state
                submitBtn.prop('disabled', false);
                submitText.show();
                submitLoading.hide();
            });
        });

        // Function to check and adjust enrollment course content display
        function adjustEnrollmentCourseContentDisplay() {
            $('.enrollment-course').each(function() {
                const $course = $(this);
                const $content = $course.find('.enrollment-course-content');
                
                // Temporarily set to inline-flex to measure natural width
                $content.css('display', 'inline-flex'); 
                
                // Check if content width exceeds parent width
                if ($content.innerWidth() > $course.innerWidth()) {
                    $content.css('display', 'block');
                } else {
                    $content.css('display', 'flex'); // Revert to flex if it fits
                }
            });
        }

        // Call on page load and window resize
        adjustEnrollmentCourseContentDisplay();
        $(window).on('resize', adjustEnrollmentCourseContentDisplay);
    }
    
    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    $('.service-card, .about-service-card, .contact-info-card').each(function() {
        this.style.opacity = '0';
        this.style.transform = 'translateY(30px)';
        this.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(this);
    });
});

// Global functions for enrollment page
function resetEnrollmentForm() {
    $('#enrollment-success, #enrollment-error').hide();
    $('#enrollment-content').show();
    $('#enrollment-form')[0].reset();
    $('.enrollment-course').removeClass('selected');
    $('#course-summary').hide();
    lucide.createIcons(); // Re-render lucide icons
}

function hideEnrollmentMessages() {
    $('#enrollment-success, #enrollment-error').hide();
    $('#enrollment-content').show();
    lucide.createIcons(); // Re-render lucide icons
}
