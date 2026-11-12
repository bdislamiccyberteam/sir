/**
 * ==========================================================================
 * THE ENGLISH LANGUAGE ACADEMY | JAFOR IQBAL
 * Official Portfolio Website JavaScript
 * ==========================================================================
 */

let allVideosData = [];

document.addEventListener('DOMContentLoaded', function () {
    initDefaultData();
    renderAllWebsiteContent();
    initLoader();
    initNavbar();
    initTypingEffect();
    initVideoFilters();
    initGalleryLightbox();
    initBackToTop();
    initBookOrderSelect();
});

// ===== 1. SEED DEFAULT DATA IF FIRST VISIT =====
function initDefaultData() {
    // 1. HERO SECTION
    if (!localStorage.getItem('portfolio_hero')) {
        const defaultHero = {
            name: "Writer – Jafor Iqbal",
            badge: "✦ The English Language Academy · Founder & CEO",
            subtitle: "Lecturer in English, Raipura Govt. College · Author of The Word Factory & English Pro · English Olympiad Adjudicator",
            typingPhrases: "Author of 'The Word Factory' & 'English Pro'\nLecturer in English, Raipura Govt. College\nFounder & CEO, Mirror IELTS & Abroad\nOfficial Adjudicator, English Olympiad\nM.A. in TESOL, North South University (NSU)\nM.A. in Applied Linguistics & ELT (JnU)\nB.A. Hon's in English Literature (DU)\nSmart English, Practical Learning, For Everyone",
            bgImage: "images/sir_pic_2.jpg",
            logoWatermark: "images/academy-logo.jpg"
        };
        localStorage.setItem('portfolio_hero', JSON.stringify(defaultHero));
    }

    // 2. TEACHER PROFILE (শিক্ষকের ছবি ও তথ্য)
    if (!localStorage.getItem('portfolio_teacher')) {
        const defaultTeacher = {
            name: "Writer – Jafor Iqbal",
            verifiedBadge: "Verified Educator & Author",
            photo: "images/sir_pic_1.jpg",
            roles: [
                "প্রভাষক (ইংরেজি), রায়পুরা সরকারি কলেজ",
                "প্রতিষ্ঠাতা ও প্রধান নির্বাহী (CEO), Mirror IELTS & Abroad",
                "অফিসিয়াল বিচারক (Adjudicator), ইংলিশ অলিম্পিয়াড (জাতীয় পর্যায়)"
            ],
            qualifications: [
                "M.A. in TESOL — North South University (NSU)",
                "M.A. in Applied Linguistics & ELT — জগন্নাথ বিশ্ববিদ্যালয় (JnU)",
                "B.A. (Hon's) in English Literature & Culture — ঢাকা বিশ্ববিদ্যালয় (DU)"
            ],
            experience: [
                "প্রভাষক (ইংরেজি) — রায়পুরা সরকারি কলেজ (৬+ বছরের শিক্ষাদান অভিজ্ঞতা)",
                "প্রাক্তন বিভাগীয় প্রধান (ইংরেজি) — পিনাকল চার্টার্ড স্কুল অ্যান্ড কলেজ (ইংলিশ ভার্সন)",
                "প্রতিষ্ঠাতা ও প্রধান নির্বাহী (CEO) — Mirror IELTS & Abroad (২০১৮ - বর্তমান)",
                "অফিসিয়াল অ্যাডজুডিকেটর — English Olympiad (জাতীয় বিতর্ক ও ভাষা মূল্যায়ন)"
            ],
            skills: [
                "Spoken English & Native Fluency Drills",
                "IELTS Band 8+ Masterclass & Academic Writing",
                "Vocabulary Mastery (Author of The Word Factory)",
                "IPA Accent Training & Correct Pronunciation",
                "Communicative English Curriculum Design",
                "Public Speaking, Presentation & Debate Mentorship"
            ],
            fbProfile: "https://facebook.com/jafor.iqbal.shahib",
            fbPage: "https://facebook.com/JaforIqbalEnglishAid",
            whatsapp: "01707236855"
        };
        localStorage.setItem('portfolio_teacher', JSON.stringify(defaultTeacher));
    }

    // 3. NOTICES & ADMISSION CIRCULARS
    if (!localStorage.getItem('portfolio_notices')) {
        const defaultNotices = [
            {
                id: 1,
                title: "ভর্তি চলছে! IELTS ও Spoken English নতুন স্পেশাল ব্যাচ",
                category: "ভর্তি বিজ্ঞপ্তি",
                date: "১৫ নভেম্বর ২০২৬",
                seats: "সীমিত আসন (১৫টি অবশিষ্ট)",
                fee: "কোর্স ফি: ৳৪,৫০০ | মেয়াদ: ৩ মাস",
                details: "The English Language Academy-তে IELTS Band 8+ প্রস্তুতি এবং স্পোকেন ইংলিশ নতুন সেশনে ভর্তি চলছে। রায়পুরা সরকারি কলেজের সামনে ও অনলাইন উভয় মাধ্যমে ক্লাস হবে।",
                activeTopBar: true
            },
            {
                id: 2,
                title: "HSC & SSC English Academic Special Care 2026",
                category: "ভর্তি বিজ্ঞপ্তি",
                date: "২০ নভেম্বর ২০২৬",
                seats: "প্রতি ব্যাচে সর্বোচ্চ ২৫ জন",
                fee: "মাসিক ফি: ৳১,২০০ | স্পেশাল হ্যান্ডনোট ফ্রি",
                details: "এইচএসসি ও এসএসসি পরীক্ষার্থীদের জন্য সম্পূর্ণ সিলেবাস রিভিশন, গ্রামার ক্লিনিং এবং লিখিত অংশের স্পেশাল টেকনিকসহ নিশ্চিত A+ প্রোগ্রাম।",
                activeTopBar: false
            },
            {
                id: 3,
                title: "The Word Factory ও English Pro বইয়ের নতুন সংস্করণ প্রকাশিত হয়েছে",
                category: "জরুরি নোটিশ",
                date: "০১ নভেম্বর ২০২৬",
                seats: "সারাদেশে কুরিয়ারে হোম ডেলিভারি",
                fee: "ক্যাশ অন ডেলিভারি সুবিধা",
                details: "অক্সফোর্ড ৫০০০ শব্দ এবং স্মার্ট স্পোকেন টেকনিকের বই দুটি এখন ওয়েবসাইটে সরাসরি ক্যাশ অন ডেলিভারিতে অর্ডার করা যাচ্ছে।",
                activeTopBar: false
            }
        ];
        localStorage.setItem('portfolio_notices', JSON.stringify(defaultNotices));
    }

    // 4. BOOKS (The Word Factory & English Pro with prices)
    if (!localStorage.getItem('portfolio_books')) {
        const defaultBooks = [
            {
                id: 1,
                title: "The Word Factory",
                author: "জাফর ইকবাল",
                price: 450,
                desc: "Learn Words Today, Lead Tomorrow — অক্সফোর্ড ৫০০০ শব্দ (Oxford 5000 Words), সঠিক উচ্চারণ (IPA), বাস্তবসম্মত বাংলা অর্থ ও ব্যাকরণগত প্রয়োগে সমৃদ্ধ দেশের অন্যতম সেরা ভোকাবুলারি গাইড।",
                tags: "Oxford 5000 Words, IPA Pronunciation, বাংলা অর্থ ও বাক্য, Spoken & Written",
                cover: "images/hero-photo.jpg"
            },
            {
                id: 2,
                title: "English Pro",
                author: "জাফর ইকবাল",
                price: 400,
                desc: "Smart English, Smart Career — স্পোকেন ইংলিশের জড়তা কাটিয়ে আত্মবিশ্বাসের সাথে ইংরেজি বলার পূর্ণাঙ্গ নির্দেশিকা। দৈনন্দিন কথোপকথন, স্টোরিটেলিং ও পাবলিক স্পিকিংয়ের আধুনিক হ্যান্ডবুক।",
                tags: "Spoken English, ELT Foundation, Public Speaking, Pronunciation Hacks",
                cover: "images/author-photo.jpg"
            }
        ];
        localStorage.setItem('portfolio_books', JSON.stringify(defaultBooks));
    }

    // 5. COURSES
    if (!localStorage.getItem('portfolio_courses')) {
        const defaultCourses = [
            {
                id: 1,
                title: "Spoken English & Fluency Mastery",
                fee: "৳৪,৫০০",
                duration: "৩ মাস (৩৬টি সেশন)",
                batch: "শনি, সোম, বুধ (সন্ধ্যা ৭:০০ - ৮:৩০)",
                desc: "ইংরেজি বলার জড়তা ও ভয় দূর করে ব্রিটিশ ও আমেরিকান সঠিক উচ্চারণে প্রতিদিনের কথোপকথনে সাবলীল হওয়ার বিশেষ কোর্স।",
                features: ["দৈনিক ১০০+ কমন কনভারসেশন ড্রিলিং", "ফনেটিক্স (IPA) ভিত্তিক সঠিক উচ্চারণ", "পাবলিক স্পিকিং ও লাইভ প্রেজেন্টেশন", "ফ্রি প্র্যাকটিস মেটেরিয়ালস ও হ্যান্ডবুক"]
            },
            {
                id: 2,
                title: "IELTS Complete Masterclass (Target 8.0)",
                fee: "৳৮,০০০",
                duration: "৩ মাস (৪০টি সেশন + ১৫টি মক টেস্ট)",
                batch: "রবি, মঙ্গল, বৃহস্পতি (সন্ধ্যা ৭:৩০ - ৯:০০)",
                desc: "লিসেনিং, রিডিং, রাইটিং এবং স্পিকিং—চারটি মডিউলের জন্য ক্যামব্রিজ সিলেবাস ভিত্তিক আন্তর্জাতিক মানের প্রিপারেশন প্রোগ্রাম।",
                features: ["ক্যামব্রিজ অফিসিয়াল টেস্ট ট্রিকস", "ওয়ান-টু-ওয়ান স্পিকিং ইন্টারভিউ", "রাইটিং টাস্ক ১ ও ২ পার্সোনাল ইভ্যালুয়েশন", "আনলিমিটেড লাইব্রেরি অ্যাক্সেস"]
            },
            {
                id: 3,
                title: "HSC English Academic Care (1st & 2nd Paper)",
                fee: "৳১,২০০ (মাসিক)",
                duration: "পূর্ণাঙ্গ সেশন",
                batch: "সকাল ও বিকাল ব্যাচ",
                desc: "এইচএসসি পরীক্ষার্থীদের ইংরেজি ১ম ও ২য় পত্রের শতভাগ সিলেবাস কমপ্লিশন, বোর্ড প্রশ্ন সলভ এবং নিশ্চিত A+ প্রোগ্রাম।",
                features: ["বোর্ড প্রশ্ন ও টেস্ট পেপার বিশ্লেষণ", "রাইটিং পার্টের নিজস্ব শর্ট টেকনিক", "প্রতি শুক্রবার সাপ্তাহিক মডেল টেস্ট", "দুর্বল শিক্ষার্থীদের এক্সট্রা কেয়ার"]
            },
            {
                id: 4,
                title: "Job & BCS English Foundation",
                fee: "৳৫,০০০",
                duration: "৪ মাস (৪৮টি ক্লাস)",
                batch: "শুক্রবার ও শনিবার (বিশেষ ব্যাচ)",
                desc: "বিসিএস, প্রাইমারি শিক্ষক নিয়োগ, ব্যাংক ও সরকারি চাকুরির জন্য প্রিলিমিনারি ও রিটেন ইংরেজির পূর্ণাঙ্গ প্রস্তুতি।",
                features: ["প্রিভিয়াস ইয়ার্স বিসিএস কোয়েশ্চন সলভ", "অ্যাডভান্সড গ্রামার রুলস ও ভোকাবুলারি", "ট্রান্সলেশন ও ফ্রি-হ্যান্ড রাইটিং", "টপিকভিত্তিক স্পেশাল কুইজ"]
            }
        ];
        localStorage.setItem('portfolio_courses', JSON.stringify(defaultCourses));
    }

    // 6. VIDEOS
    if (!localStorage.getItem('portfolio_videos')) {
        const defaultVideos = [
            {
                id: 1,
                platform: "youtube",
                title: "IELTS Speaking Band 8+ Secret Techniques with Jafor Iqbal Sir",
                category: "IELTS Preparation",
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                desc: "আইইএলটিএস স্পিকিং টেস্টে উচ্চ ব্যান্ড স্কোর অর্জনের গোপন কৌশল ও ফ্লুয়েন্সি তৈরির নিয়ম।"
            },
            {
                id: 2,
                platform: "youtube",
                title: "The Word Factory: Oxford 5000 Words সহজে মনে রাখার ম্যাজিক পদ্ধতি",
                category: "Vocabulary & IPA",
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                desc: "অক্সফোর্ড ৫০০০ শব্দ কীভাবে প্রাত্যহিক বাক্য ও স্পোকেনে প্রয়োগ করবেন তার বিস্তারিত ক্লাস।"
            },
            {
                id: 3,
                platform: "facebook",
                title: "Facebook Live: দৈনন্দিন স্পোকেন ইংলিশে যে ভুলগুলো আমরা প্রায়ই করি",
                category: "Spoken English",
                url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&show_text=false",
                desc: "Jafor Iqbal's English Aid পেজ থেকে সরাসরি লাইভ প্রশ্নোত্তর ও স্পোকেন প্র্যাকটিস।"
            },
            {
                id: 4,
                platform: "facebook",
                title: "Facebook Live: HSC & SSC English Writing পার্টে সর্বোচ্চ নম্বর পাওয়ার টেকনিক",
                category: "Academic English",
                url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&show_text=false",
                desc: "প্যারাগ্রাফ ও কম্পোজিশন ফ্রি-হ্যান্ড লেখার স্পেশাল ফরম্যাট ও গাইডলাইন।"
            }
        ];
        localStorage.setItem('portfolio_videos', JSON.stringify(defaultVideos));
    }

    // 7. PHOTO GALLERY (Using real photos of Sir)
    if (!localStorage.getItem('portfolio_gallery')) {
        const defaultGallery = [
            { id: 1, image: "images/sir_pic_1.jpg", caption: "Writer – Jafor Iqbal অফিসিয়াল পোর্ট্রেট", category: "শিক্ষক পরিচিতি" },
            { id: 2, image: "images/sir_pic_3.jpg", caption: "দ্য ইংলিশ ল্যাঙ্গুয়েজ একাডেমি সেমিনার ও মতবিনিময়", category: "একাডেমি সেমিনার" },
            { id: 3, image: "images/sir_pic_4.jpg", caption: "শিক্ষার্থীদের সাথে স্পোকেন ইংলিশ ড্রিলিং সেশন", category: "ক্লাসরুম" },
            { id: 4, image: "images/sir_pic_5.jpg", caption: "বই প্রকাশনা ও পাঠচক্র উৎসব", category: "বই প্রকাশনা" },
            { id: 5, image: "images/academy-poster.jpg", caption: "The English Language Academy ক্যাম্পাস ও পোস্টার", category: "ক্যাম্পাস" },
            { id: 6, image: "images/sir_pic_2.jpg", caption: "আইইএলটিএস ও স্টাডি অ্যাব্রড ক্যারিয়ার পরামর্শ", category: "ক্যারিয়ার সেশন" }
        ];
        localStorage.setItem('portfolio_gallery', JSON.stringify(defaultGallery));
    }

    // 8. ACADEMY INFO
    if (!localStorage.getItem('portfolio_academy')) {
        const defaultAcademy = {
            name: "The English Language Academy",
            tagline: "Learn Smart | Speak Confident | Achieve Success — ২০১৮ সালে রায়পুরা, নরসিংদীতে প্রতিষ্ঠিত। আন্তর্জাতিক মানের আইইএলটিএস প্রস্তুতি, বিদেশে উচ্চশিক্ষা পরামর্শ এবং বাস্তবমুখী ইংরেজি শিক্ষায় নির্ভরযোগ্য প্রতিষ্ঠান।",
            logo: "images/academy-logo.jpg",
            badges: "🎧 IELTS Coaching, 🌍 Study Abroad Counseling, 🛂 Immigration Advisory, 📍 In front of Raipura Govt. College",
            vision1Icon: "🧠", vision1Title: "স্মার্ট লার্নিং", vision1Desc: "মুখস্থ নয়, বাস্তবমুখী কনসেপ্টভিত্তিক পদ্ধতিতে সহজে গ্রামার ও শব্দভাণ্ডার আয়ত্ত করা।",
            vision2Icon: "🗣️", vision2Title: "সাবলীল স্পিকিং", vision2Desc: "ভয় ও জড়তা দূর করে সাবলীল উচ্চারণে নিয়মিত ইংরেজিতে কথা বলার পরিবেশ তৈরি।",
            vision3Icon: "🚀", vision3Title: "উজ্জ্বল ভবিষ্যৎ", vision3Desc: "উচ্চ ব্যান্ড স্কোর, বিদেশের বিশ্ববিদ্যালয়ে স্কলারশিপ এবং আকর্ষণীয় ক্যারিয়ার গঠনের পথ সুগম করা।"
        };
        localStorage.setItem('portfolio_academy', JSON.stringify(defaultAcademy));
    }

    // 9. CONTACT INFO
    if (!localStorage.getItem('portfolio_contact')) {
        const defaultContact = {
            phone1: "01707236855",
            phone2: "01992785557",
            whatsapp: "https://wa.me/8801707236855",
            email: "info@mirrorielts.com",
            facebookPersonal: "https://facebook.com/jafor.iqbal.shahib",
            facebookPage: "https://facebook.com/JaforIqbalEnglishAid",
            address: "The English Language Academy, রায়পুরা সরকারি কলেজের সামনে, রায়পুরা, নরসিংদী।"
        };
        localStorage.setItem('portfolio_contact', JSON.stringify(defaultContact));
    }

    if (!localStorage.getItem('portfolio_book_orders')) {
        localStorage.setItem('portfolio_book_orders', JSON.stringify([]));
    }

    if (!localStorage.getItem('portfolio_admissions')) {
        localStorage.setItem('portfolio_admissions', JSON.stringify([]));
    }

    if (!localStorage.getItem('portfolio_messages')) {
        localStorage.setItem('portfolio_messages', JSON.stringify([]));
    }
}

// ===== 2. RENDER ALL CONTENT ON WEBSITE =====
function renderAllWebsiteContent() {
    renderTopNoticeBar();
    renderHero();
    renderAdmissionCirculars();
    renderTeacherProfile();
    renderCourses();
    renderBooks();
    renderVideos();
    renderGallery();
    renderAcademy();
    renderContact();
}

// ===== 3. TOP NOTICE BAR =====
function renderTopNoticeBar() {
    const noticeBar = document.getElementById('topNoticeBar');
    const badge = document.getElementById('noticeBadge');
    const ticker = document.getElementById('noticeTickerText');
    if (!noticeBar || !ticker) return;

    if (sessionStorage.getItem('notice_dismissed') === 'true') {
        noticeBar.style.display = 'none';
        return;
    }

    const notices = JSON.parse(localStorage.getItem('portfolio_notices') || '[]');
    const activeNotice = notices.find(n => n.activeTopBar === true);

    if (activeNotice) {
        if (badge) badge.textContent = `📢 ${activeNotice.category || 'বিজ্ঞপ্তি'}`;
        ticker.innerHTML = `${escapeHtml(activeNotice.title)} — <a href="#admission">অনলাইন ভর্তি ফর্ম পূরণ করুন ➔</a>`;
        noticeBar.style.display = 'flex';
    } else {
        noticeBar.style.display = 'none';
    }
}

function dismissNoticeBar() {
    const noticeBar = document.getElementById('topNoticeBar');
    if (noticeBar) {
        noticeBar.style.display = 'none';
        sessionStorage.setItem('notice_dismissed', 'true');
    }
}

// ===== 4. HERO SECTION =====
function renderHero() {
    const hero = JSON.parse(localStorage.getItem('portfolio_hero') || '{}');
    
    const heroName = document.getElementById('heroName');
    const heroBadge = document.getElementById('heroBadge');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const heroBg = document.getElementById('heroBg');

    if (heroName && hero.name) {
        heroName.innerHTML = escapeHtml(hero.name).replace('Jafor Iqbal', '<span>Jafor Iqbal</span>');
    }
    if (heroBadge && hero.badge) heroBadge.textContent = hero.badge;
    if (heroSubtitle && hero.subtitle) heroSubtitle.textContent = hero.subtitle;
    if (heroBg && hero.bgImage) {
        heroBg.style.backgroundImage = `url('${hero.bgImage}')`;
    }
}

// ===== 5. ADMISSION NOTICE / CIRCULARS =====
function renderAdmissionCirculars() {
    const grid = document.getElementById('circularsGrid');
    if (!grid) return;

    const notices = JSON.parse(localStorage.getItem('portfolio_notices') || '[]');
    const circulars = notices.filter(n => n.category === 'ভর্তি বিজ্ঞপ্তি' || n.seats);

    if (circulars.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #cbd5e1; background: rgba(255,255,255,0.05); border-radius: 16px;">
                📢 এই মুহূর্তে নতুন কোনো সার্কুলার নেই। নিয়মিত আপডেট পেতে আমাদের সাথে থাকুন।
            </div>
        `;
        return;
    }

    grid.innerHTML = circulars.map(c => `
        <div class="circular-card">
            <span class="circular-badge-hot">ভর্তি চলছে</span>
            <h3 class="circular-title">${escapeHtml(c.title)}</h3>
            <p class="circular-desc">${escapeHtml(c.details || '')}</p>
            
            <div class="circular-meta-list">
                <div class="circular-meta-item">
                    <span>🗓️ ব্যাচ শুরু / তারিখ:</span>
                    <strong>${escapeHtml(c.date || 'চলমান')}</strong>
                </div>
                <div class="circular-meta-item">
                    <span>👥 আসন সংখ্যা:</span>
                    <strong style="color: #e74c3c;">${escapeHtml(c.seats || 'সীমিত আসন')}</strong>
                </div>
                <div class="circular-meta-item">
                    <span>💰 কোর্স ফি / শিডিউল:</span>
                    <span class="circular-price-tag">${escapeHtml(c.fee || 'আলোচনা সাপেক্ষে')}</span>
                </div>
            </div>

            <a href="#admission" onclick="preselectAdmissionCourse('${escapeHtml(c.title)}')" class="btn-apply-circular">
                এখনই ভর্তি ফর্ম পূরণ করুন ➔
            </a>
        </div>
    `).join('');
}

function preselectAdmissionCourse(title) {
    const courseSelect = document.getElementById('admCourse');
    if (courseSelect) {
        for (let i = 0; i < courseSelect.options.length; i++) {
            if (title.toLowerCase().includes('ielts') && courseSelect.options[i].value.includes('IELTS')) {
                courseSelect.selectedIndex = i;
                break;
            } else if (title.toLowerCase().includes('spoken') && courseSelect.options[i].value.includes('Spoken')) {
                courseSelect.selectedIndex = i;
                break;
            } else if (title.toLowerCase().includes('hsc') && courseSelect.options[i].value.includes('HSC')) {
                courseSelect.selectedIndex = i;
                break;
            }
        }
    }
}

// ===== 6. TEACHER PROFILE (শিক্ষক পরিচিতি - ছবির পাশে ক্রমানুসারে পূর্ণ তথ্য) =====
function renderTeacherProfile() {
    const teacher = JSON.parse(localStorage.getItem('portfolio_teacher') || '{}');

    // Photo
    const photoEl = document.getElementById('teacherPhoto');
    if (photoEl && teacher.photo) photoEl.src = teacher.photo;

    // 1. নাম ও পরিচয় (Writer – Jafor Iqbal)
    const nameEl = document.getElementById('teacherName');
    if (nameEl && teacher.name) {
        nameEl.innerHTML = escapeHtml(teacher.name).replace('Jafor Iqbal', '<span>Jafor Iqbal</span>');
    }

    const rolesEl = document.getElementById('teacherRoles');
    if (rolesEl && Array.isArray(teacher.roles)) {
        rolesEl.innerHTML = teacher.roles.map(r => escapeHtml(r)).join('<br>');
    }

    // 2. শিক্ষাগত যোগ্যতা
    const qualList = document.getElementById('teacherEducationList');
    if (qualList && Array.isArray(teacher.qualifications)) {
        qualList.innerHTML = teacher.qualifications.map(q => `
            <div class="teacher-list-item">
                <span class="bullet"></span>
                <span>${escapeHtml(q)}</span>
            </div>
        `).join('');
    }

    // 3. পেশাগত অভিজ্ঞতা
    const expList = document.getElementById('teacherExperienceList');
    if (expList && Array.isArray(teacher.experience)) {
        expList.innerHTML = teacher.experience.map(e => `
            <div class="teacher-list-item">
                <span class="bullet"></span>
                <span>${escapeHtml(e)}</span>
            </div>
        `).join('');
    }

    // 4. বিশেষ দক্ষতা ও অর্জন
    const skillsContainer = document.getElementById('teacherSkillsTags');
    if (skillsContainer && Array.isArray(teacher.skills)) {
        skillsContainer.innerHTML = teacher.skills.map(s => `
            <span class="teacher-skill-tag">✓ ${escapeHtml(s)}</span>
        `).join('');
    }

    // 5. বাটনসমূহ
    const fbProfile = document.getElementById('teacherFbProfile');
    if (fbProfile && teacher.fbProfile) fbProfile.href = teacher.fbProfile;

    const fbPage = document.getElementById('teacherFbPage');
    if (fbPage && teacher.fbPage) fbPage.href = teacher.fbPage;

    const waAction = document.getElementById('teacherWaAction');
    if (waAction && teacher.whatsapp) {
        const cleanWa = teacher.whatsapp.replace(/[^0-9]/g, '');
        waAction.href = `https://wa.me/88${cleanWa.startsWith('88') ? cleanWa.slice(2) : cleanWa}`;
    }
}

// ===== 7. COURSES SECTION =====
function renderCourses() {
    const grid = document.getElementById('coursesGrid');
    if (!grid) return;

    const courses = JSON.parse(localStorage.getItem('portfolio_courses') || '[]');
    if (courses.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #888;">কোনো কোর্স পাওয়া যায়নি।</div>`;
        return;
    }

    grid.innerHTML = courses.map(c => `
        <div class="program-card">
            <div class="program-badge">কোর্স ফি: ${escapeHtml(c.fee || 'যোগাযোগ করুন')}</div>
            <h3>${escapeHtml(c.title)}</h3>
            <p style="color: #64748b; font-size: 0.92rem; margin-bottom: 15px;">${escapeHtml(c.desc || '')}</p>
            
            <div style="background: #f8f9fc; border-radius: 10px; padding: 12px; margin-bottom: 16px; font-size: 0.88rem;">
                <p><strong>⏳ মেয়াদ:</strong> ${escapeHtml(c.duration || 'নিয়মিত')}</p>
                <p><strong>🕒 ব্যাচ সময়:</strong> ${escapeHtml(c.batch || 'সকাল ও বিকাল ব্যাচ')}</p>
            </div>

            ${Array.isArray(c.features) && c.features.length > 0 ? `
                <ul class="program-topics" style="margin-bottom: 20px;">
                    ${c.features.map(f => `<li>${escapeHtml(f)}</li>`).join('')}
                </ul>
            ` : ''}

            <a href="#admission" onclick="preselectAdmissionCourse('${escapeHtml(c.title)}')" class="btn btn-outline" style="width: 100%; text-align: center; justify-content: center;">
                🎓 ভর্তি আবেদন করুন
            </a>
        </div>
    `).join('');
}

// ===== 8. BOOKS & ORDER SYSTEM =====
function renderBooks() {
    const grid = document.getElementById('booksGrid');
    if (!grid) return;

    const books = JSON.parse(localStorage.getItem('portfolio_books') || '[]');
    if (books.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #888;">কোনো বই পাওয়া যায়নি।</div>`;
        return;
    }

    grid.innerHTML = books.map(b => `
        <div class="book-card">
            <img src="${escapeHtml(b.cover || 'images/hero-photo.jpg')}" alt="${escapeHtml(b.title)}" class="book-cover">
            <div class="book-info">
                <span class="book-price-badge">মূল্য: ৳${escapeHtml(String(b.price || '৪৫০'))}</span>
                <h3>${escapeHtml(b.title)}</h3>
                <div class="book-author">লেখক: ${escapeHtml(b.author || 'জাফর ইকবাল')}</div>
                <p class="book-desc">${escapeHtml(b.desc || '')}</p>
                
                ${b.tags ? `
                    <div class="book-tags">
                        ${b.tags.split(',').map(t => `<span class="book-tag">${escapeHtml(t.trim())}</span>`).join('')}
                    </div>
                ` : ''}

                <div style="margin-top: 20px;">
                    <button class="btn-order-book" onclick="openBookOrderModal(${b.id})">
                        🛒 Order Now (৳${escapeHtml(String(b.price || '৪৫০'))})
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Book Order State
let currentOrderBook = null;
let currentOrderQty = 1;
const COURIER_DELIVERY_CHARGE = 50;

function initBookOrderSelect() {
    const select = document.getElementById('orderBookSelect');
    if (!select) return;
    const books = JSON.parse(localStorage.getItem('portfolio_books') || '[]');
    select.innerHTML = books.map(b => `
        <option value="${b.id}">${escapeHtml(b.title)} — ৳${escapeHtml(String(b.price))}</option>
    `).join('');
}

function openBookOrderModal(bookId) {
    const books = JSON.parse(localStorage.getItem('portfolio_books') || '[]');
    currentOrderBook = books.find(b => b.id === bookId) || books[0];
    if (!currentOrderBook) return;

    currentOrderQty = 1;
    document.getElementById('orderBookSelect').value = currentOrderBook.id;
    document.getElementById('orderBookId').value = currentOrderBook.id;
    document.getElementById('orderBookUnitPrice').value = currentOrderBook.price || 450;
    document.getElementById('orderSummaryBookTitle').textContent = currentOrderBook.title;
    document.getElementById('orderSummaryUnitPrice').textContent = `৳${currentOrderBook.price || 450}`;
    document.getElementById('orderQtyInput').value = currentOrderQty;

    updateOrderPriceDisplay();

    document.getElementById('orderCustomerName').value = '';
    document.getElementById('orderCustomerPhone').value = '';
    document.getElementById('orderCustomerAddress').value = '';
    
    const alertBox = document.getElementById('orderAlert');
    if (alertBox) alertBox.style.display = 'none';

    document.getElementById('bookOrderModal').classList.add('active');
}

function onBookSelectChange(bookId) {
    const books = JSON.parse(localStorage.getItem('portfolio_books') || '[]');
    const selected = books.find(b => b.id === Number(bookId));
    if (selected) {
        currentOrderBook = selected;
        document.getElementById('orderBookId').value = selected.id;
        document.getElementById('orderBookUnitPrice').value = selected.price || 450;
        document.getElementById('orderSummaryBookTitle').textContent = selected.title;
        document.getElementById('orderSummaryUnitPrice').textContent = `৳${selected.price || 450}`;
        updateOrderPriceDisplay();
    }
}

function closeOrderModal() {
    document.getElementById('bookOrderModal').classList.remove('active');
}

function adjustOrderQty(delta) {
    const newQty = currentOrderQty + delta;
    if (newQty >= 1 && newQty <= 20) {
        currentOrderQty = newQty;
        document.getElementById('orderQtyInput').value = currentOrderQty;
        updateOrderPriceDisplay();
    }
}

function updateOrderPriceDisplay() {
    if (!currentOrderBook) return;
    const unitPrice = Number(currentOrderBook.price) || 450;
    const subtotal = unitPrice * currentOrderQty;
    const grandTotal = subtotal + COURIER_DELIVERY_CHARGE;

    document.getElementById('orderSubtotalText').textContent = `৳${subtotal}`;
    document.getElementById('orderDeliveryText').textContent = `৳${COURIER_DELIVERY_CHARGE}`;
    document.getElementById('orderGrandTotalText').textContent = `৳${grandTotal}`;
}

function handleBookOrderSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('orderCustomerName').value.trim();
    const phone = document.getElementById('orderCustomerPhone').value.trim();
    const address = document.getElementById('orderCustomerAddress').value.trim();
    const alertBox = document.getElementById('orderAlert');

    if (!name || !phone || !address) {
        alertBox.style.display = 'block';
        alertBox.style.background = '#fde8e8';
        alertBox.style.color = '#9b1c1c';
        alertBox.textContent = 'অনুগ্রহ করে সকল তথ্য নির্ভুলভাবে পূরণ করুন।';
        return;
    }

    const unitPrice = Number(currentOrderBook.price) || 450;
    const subtotal = unitPrice * currentOrderQty;
    const totalAmount = subtotal + COURIER_DELIVERY_CHARGE;
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    const orderDate = new Date().toLocaleString('bn-BD');

    const newOrder = {
        orderId: orderId,
        date: orderDate,
        bookId: currentOrderBook.id,
        bookTitle: currentOrderBook.title,
        unitPrice: unitPrice,
        quantity: currentOrderQty,
        totalAmount: totalAmount,
        customerName: name,
        customerPhone: phone,
        customerAddress: address,
        status: 'পেন্ডিং'
    };

    const orders = JSON.parse(localStorage.getItem('portfolio_book_orders') || '[]');
    orders.unshift(newOrder);
    localStorage.setItem('portfolio_book_orders', JSON.stringify(orders));

    alertBox.style.display = 'block';
    alertBox.style.background = '#def7ec';
    alertBox.style.color = '#03543f';
    alertBox.innerHTML = `
        ✓ অভিনন্দন! আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে।<br>
        <strong>অর্ডার আইডি: #${orderId}</strong><br>
        আমাদের টিম খুব শীঘ্রই আপনার ঠিকানায় ক্যাশ অন ডেলিভারিতে বই পাঠিয়ে দেবে।
    `;

    try {
        fetch('/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        }).catch(() => {});
    } catch (_) {}

    setTimeout(() => {
        closeOrderModal();
        showWebToast(`✓ ধন্যবাদ ${name}! আপনার অর্ডার (#${orderId}) জমা হয়েছে।`);
    }, 2800);
}

// ===== 9. ADMISSION FORM SUBMISSION (পিতা-মাতার নামসহ) =====
function handleAdmissionSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('admStudentName').value.trim();
    const fatherName = document.getElementById('admFatherName').value.trim();
    const motherName = document.getElementById('admMotherName').value.trim();
    const phone = document.getElementById('admPhone').value.trim();
    const email = document.getElementById('admEmail').value.trim();
    const course = document.getElementById('admCourse').value;
    const address = document.getElementById('admAddress').value.trim();
    const notes = document.getElementById('admNotes').value.trim();

    const alertBox = document.getElementById('admissionAlert');

    if (!name || !fatherName || !motherName || !phone || !email || !course || !address) {
        alertBox.style.display = 'block';
        alertBox.style.background = '#fde8e8';
        alertBox.style.color = '#9b1c1c';
        alertBox.textContent = 'অনুগ্রহ করে আবশ্যকীয় সকল তথ্য পূরণ করুন।';
        return;
    }

    const rollId = 'ADM-' + Math.floor(1000 + Math.random() * 9000);
    const date = new Date().toLocaleString('bn-BD');

    const newAdmission = {
        rollId: rollId,
        date: date,
        name: name,
        fatherName: fatherName,
        motherName: motherName,
        phone: phone,
        email: email,
        course: course,
        address: address,
        notes: notes,
        status: 'নতুন আবেদন'
    };

    const admissions = JSON.parse(localStorage.getItem('portfolio_admissions') || '[]');
    admissions.unshift(newAdmission);
    localStorage.setItem('portfolio_admissions', JSON.stringify(admissions));

    alertBox.style.display = 'block';
    alertBox.style.background = '#def7ec';
    alertBox.style.color = '#03543f';
    alertBox.innerHTML = `
        ✓ অভিনন্দন ${escapeHtml(name)}! আপনার ভর্তি আবেদন সফলভাবে জমা হয়েছে।<br>
        <strong>ভর্তি রোল / ট্র্যাকিং আইডি: #${rollId}</strong><br>
        আমাদের একাডেমি থেকে দ্রুত আপনার মোবাইলে (${escapeHtml(phone)}) যোগাযোগ করা হবে।
    `;

    document.getElementById('admissionForm').reset();

    try {
        fetch('/api/admissions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAdmission)
        }).catch(() => {});
    } catch (_) {}

    showWebToast(`✓ ভর্তি আবেদন সফল! রোল আইডি: #${rollId}`);
}

// ===== 10. VIDEOS MANAGEMENT SYSTEM (YOUTUBE & FACEBOOK FILTER + SEARCH) =====
let currentVideoFilter = 'all';
let currentVideoSearch = '';

function renderVideos() {
    const grid = document.getElementById('videosGrid');
    if (!grid) return;

    allVideosData = JSON.parse(localStorage.getItem('portfolio_videos') || '[]');
    
    let filtered = allVideosData;

    // Platform Filter
    if (currentVideoFilter !== 'all') {
        filtered = filtered.filter(v => v.platform === currentVideoFilter);
    }

    // Search Query Filter
    if (currentVideoSearch) {
        const q = currentVideoSearch.toLowerCase();
        filtered = filtered.filter(v => 
            (v.title && v.title.toLowerCase().includes(q)) ||
            (v.category && v.category.toLowerCase().includes(q)) ||
            (v.desc && v.desc.toLowerCase().includes(q))
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #888; padding: 40px;">কোনো ভিডিও পাওয়া যায়নি। অন্য কিওয়ার্ড দিয়ে সার্চ করুন।</div>`;
        return;
    }

    grid.innerHTML = filtered.map(v => {
        const isYT = v.platform === 'youtube';
        return `
            <div class="video-card">
                <div class="video-embed-container">
                    <iframe 
                        src="${escapeHtml(v.url)}" 
                        title="${escapeHtml(v.title)}" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="video-card-body">
                    <span class="video-platform-badge ${isYT ? 'yt' : 'fb'}">
                        ${isYT ? '▶ YouTube' : '📘 Facebook Video'}
                    </span>
                    <h3 class="video-title">${escapeHtml(v.title)}</h3>
                    <p class="video-desc">${escapeHtml(v.desc || '')}</p>
                </div>
            </div>
        `;
    }).join('');
}

function initVideoFilters() {
    const filterBtns = document.querySelectorAll('.video-filter-bar .filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentVideoFilter = this.getAttribute('data-filter');
            renderVideos();
        });
    });
}

function handleVideoSearch(val) {
    currentVideoSearch = val.trim();
    renderVideos();
}

// ===== 11. PHOTO GALLERY & LIGHTBOX =====
function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    const gallery = JSON.parse(localStorage.getItem('portfolio_gallery') || '[]');
    if (gallery.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #888;">কোনো ছবি পাওয়া যায়নি।</div>`;
        return;
    }

    grid.innerHTML = gallery.map(item => `
        <div class="gallery-item" onclick="openLightbox('${escapeHtml(item.image)}')">
            <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.caption || '')}" loading="lazy">
            <div class="gallery-overlay">
                <h4>${escapeHtml(item.caption || 'ভিউ করুন')}</h4>
                <p>${escapeHtml(item.category || 'গ্যালারি')}</p>
            </div>
        </div>
    `).join('');
}

function initGalleryLightbox() {
    const modal = document.getElementById('lightboxModal');
    const closeBtn = document.querySelector('.lightbox-close');
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }
}

function openLightbox(imgSrc) {
    const modal = document.getElementById('lightboxModal');
    const img = document.getElementById('lightboxImg');
    if (modal && img) {
        img.src = imgSrc;
        modal.classList.add('active');
    }
}

// ===== 12. ACADEMY SHOWCASE =====
function renderAcademy() {
    const academy = JSON.parse(localStorage.getItem('portfolio_academy') || '{}');
    const nameEl = document.getElementById('academyName');
    const taglineEl = document.getElementById('academyTagline');
    const logoImg = document.getElementById('academyLogoImg');
    const badgesContainer = document.getElementById('academyBadges');
    const visionGrid = document.getElementById('academyVisionGrid');

    if (nameEl && academy.name) {
        nameEl.innerHTML = academy.name.replace('Language Academy', '<span>Language Academy</span>');
    }
    if (taglineEl && academy.tagline) taglineEl.innerHTML = escapeHtml(academy.tagline);
    if (logoImg && academy.logo) logoImg.src = academy.logo;

    if (badgesContainer && academy.badges) {
        const badgesArr = academy.badges.split(',');
        badgesContainer.innerHTML = badgesArr.map(b => `
            <span class="academy-badge">${escapeHtml(b.trim())}</span>
        `).join('');
    }

    if (visionGrid) {
        visionGrid.innerHTML = `
            <div class="vision-card">
                <div class="vision-icon">${academy.vision1Icon || '🧠'}</div>
                <h4>${escapeHtml(academy.vision1Title || 'স্মার্ট লার্নিং')}</h4>
                <p>${escapeHtml(academy.vision1Desc || 'বাস্তবমুখী কনসেপ্টভিত্তিক পদ্ধতিতে সহজে ইংরেজি আয়ত্ত করা।')}</p>
            </div>
            <div class="vision-card">
                <div class="vision-icon">${academy.vision2Icon || '🗣️'}</div>
                <h4>${escapeHtml(academy.vision2Title || 'সাবলীল স্পিকিং')}</h4>
                <p>${escapeHtml(academy.vision2Desc || 'ভয় ও জড়তা দূর করে সাবলীল উচ্চারণে নিয়মিত ইংরেজিতে কথা বলার পরিবেশ।')}</p>
            </div>
            <div class="vision-card">
                <div class="vision-icon">${academy.vision3Icon || '🚀'}</div>
                <h4>${escapeHtml(academy.vision3Title || 'উজ্জ্বল ভবিষ্যৎ')}</h4>
                <p>${escapeHtml(academy.vision3Desc || 'উচ্চ ব্যান্ড স্কোর, বিদেশের বিশ্ববিদ্যালয়ে স্কলারশিপ ও আকর্ষণীয় ক্যারিয়ার।')}</p>
            </div>
        `;
    }
}

// ===== 13. CONTACT & SOCIAL INFO =====
function renderContact() {
    const c = JSON.parse(localStorage.getItem('portfolio_contact') || '{}');

    const p1 = document.getElementById('conPhone1El');
    if (p1 && c.phone1) {
        p1.textContent = c.phone1;
        p1.href = `tel:${c.phone1}`;
    }

    const p2 = document.getElementById('conPhone2El');
    if (p2 && c.phone2) {
        p2.textContent = c.phone2;
        p2.href = `tel:${c.phone2}`;
    }

    const waLink = document.getElementById('conWhatsappLinkEl');
    const waFloat = document.getElementById('whatsappFloat');
    if (c.whatsapp) {
        if (waLink) waLink.href = c.whatsapp;
        if (waFloat) waFloat.href = c.whatsapp;
    }

    const fbPersonal = document.getElementById('conFbPersonalEl');
    if (fbPersonal && c.facebookPersonal) fbPersonal.href = c.facebookPersonal;

    const fbPage = document.getElementById('conFbPageEl');
    if (fbPage && c.facebookPage) fbPage.href = c.facebookPage;

    const addr = document.getElementById('conAddressEl');
    if (addr && c.address) addr.innerHTML = escapeHtml(c.address).replace(/\n/g, '<br>');
}

function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const alertBox = document.getElementById('contactFormAlert');

    if (!name || !email || !message) {
        alertBox.style.display = 'block';
        alertBox.style.background = '#fde8e8';
        alertBox.style.color = '#9b1c1c';
        alertBox.textContent = 'অনুগ্রহ করে নাম, ইমেইল ও মেসেজ লিখুন।';
        return;
    }

    const newMsg = {
        id: Date.now(),
        date: new Date().toLocaleString('bn-BD'),
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    const messages = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
    messages.unshift(newMsg);
    localStorage.setItem('portfolio_messages', JSON.stringify(messages));

    alertBox.style.display = 'block';
    alertBox.style.background = '#def7ec';
    alertBox.style.color = '#03543f';
    alertBox.textContent = '✓ আপনার মেসেজটি সফলভাবে পৌঁছেছে! দ্রুত উত্তর দেওয়া হবে।';

    document.getElementById('contactForm').reset();
    showWebToast('✓ আপনার মেসেজটি ইনবক্সে পৌঁছেছে!');
}

// ===== 14. UTILITIES & ANIMATIONS =====
function initLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }, 400);
    }
}

function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

function initTypingEffect() {
    const typingEl = document.getElementById('typingText');
    if (!typingEl) return;

    const hero = JSON.parse(localStorage.getItem('portfolio_hero') || '{}');
    const phrasesText = hero.typingPhrases || "Author of 'The Word Factory' & 'English Pro'\nLecturer in English, Raipura Govt. College\nFounder & CEO, Mirror IELTS & Abroad";
    const phrases = phrasesText.split('\n').filter(p => p.trim());

    if (phrases.length === 0) return;

    let pIdx = 0;
    let cIdx = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[pIdx];
        if (isDeleting) {
            typingEl.textContent = currentPhrase.substring(0, cIdx - 1);
            cIdx--;
        } else {
            typingEl.textContent = currentPhrase.substring(0, cIdx + 1);
            cIdx++;
        }

        let speed = isDeleting ? 30 : 70;

        if (!isDeleting && cIdx === currentPhrase.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && cIdx === 0) {
            isDeleting = false;
            pIdx = (pIdx + 1) % phrases.length;
            speed = 500;
        }

        setTimeout(type, speed);
    }

    type();
}

function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (btn) {
        window.addEventListener('scroll', () => {
            btn.classList.toggle('show', window.scrollY > 400);
        });
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function showWebToast(msg) {
    let toast = document.getElementById('webToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'webToast';
        toast.className = 'toast-msg';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

function escapeHtml(text) {
    if (!text) return '';
    return text.toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
