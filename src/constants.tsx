/* =========================
   Article Types
========================= */

export const ARTICLE_TYPES = {
  ONLINE: 'رابط إلكتروني',
  TEXT: 'نص مقال',
  PDF: 'ملف PDF',
  SCANNED: 'قصاصة صحفية',
} as const;

/* =========================
   Types
========================= */

export type TimelineItem = {
  year: string;
  title: string;
  institution: string;
  description: string;
};

export type  TimelineItemAcademic = {
  year: string;
  title: string;
  institution: string;
  description: string;
};

export type Publication = {
  title: string;
  year: string;
  publisher: string;
  description: string;
  pdfUrl: string;
  coverImage: string;
};

export type QuoteItem = {
  text: string;
  source: string;
};

export type Article = {
  title: string;
  date: string;
  type: (typeof ARTICLE_TYPES)[keyof typeof ARTICLE_TYPES];
  excerpt: string;
  url: string;
};

/* =========================
   Timeline Data
========================= */

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: '3 سنوات',
    title: '  محاضر بمعهد المعلمين الثانوي  ',
    institution: 'جازان - مكة المكرمة  ',
    description:
      'أطروحة بعنوان: "الأسس المعرفية والاجتماعية للتعلم التعاوني في المدارس الابتدائية".',
  },
  {
    year: 'سنتان',
    title: '  مدرس بمدرسة الحسين بن علي الثانوية  ',
    institution: 'مكة المكرمة    ',
    description:
      'بدأت مسيرتها التدريسية بالتركيز على تقاطع علم الاجتماع والسياسات التعليمية.',
  },
  {
    year: 'سنتان',
    title: 'مدرس بمدرسة طلحة بن عبيدالله الثانوية  ',
    institution: 'مكة المكرمة ',
    description:
      'عُينت رئيسة لقسم أصول التربية، وقادت المبادرة الدولية لمحو الأمية الوظيفية.',
  },
  {
    year: '7 سنوات',
    title: ' محاضر علم نفس بكلية اعداد المعلمين',
    institution: 'ابها   ',
    description:
      'أشرفت على عقد من النمو غير المسبوق في البحوث التربوية والشراكات العالمية.',
  },
  {
    year: 'سنتان',
    title: ' مرشد بمدرسة مكة الثانوية',
    institution: 'مكة المكرمة  ',
    description:
      'تواصل أبحاثها كزميلة أقدم، مع التركيز على أخلاقيات الرقمنة في فصول المستقبل.',
  },

  {
    year: '3 سنوات',
    title: ' مرشد بمدرسة ابو عبيدة المتوسطة',
    institution: 'مكة المكرمة  ',
    description:
      'تواصل أبحاثها كزميلة أقدم، مع التركيز على أخلاقيات الرقمنة في فصول المستقبل.',
  },
  {
    year: '10 سنوات',
    title: ' مدير بمدرسة الاحنف بن قيس الابتدائية',
    institution: 'مكة المكرمة  ',
    description:
      'تواصل أبحاثها كزميلة أقدم، مع التركيز على أخلاقيات الرقمنة في فصول المستقبل.',
  },
];


export const ACADEMIC_DATA: TimelineItemAcademic[] = [
  {
    year: 'الابتدائية',
    degree: 'المدرسة السعودية    ',
    university: 'مكة المكرمة  ',
    description:
      'أطروحة بعنوان: "الأسس المعرفية والاجتماعية للتعلم التعاوني في المدارس الابتدائية".',
      major:"",
      thesis:"الأسس المعرفية والاجتماعية للتعلم التعاوني في المدارس الابتدائية"
  },
 {
    year: 'المتوسطة',
    degree: ' المدرسة الرحمانية  ',
    university: 'مكة المكرمة  ',
    description:
      'أطروحة بعنوان: "الأسس المعرفية والاجتماعية للتعلم التعاوني في المدارس الابتدائية".',
      major:"",
      thesis:"الأسس المعرفية والاجتماعية للتعلم التعاوني في المدارس الابتدائية"
  },
 {
    year: 'الثانوية',
    degree: ' مدرسة الملك عبدالعزيز',
    university: 'مكةالمكرمة  ',
    description:
      'أطروحة بعنوان: "الأسس المعرفية والاجتماعية للتعلم التعاوني في المدارس الابتدائية".',
      major:"",
      thesis:"الأسس المعرفية والاجتماعية للتعلم التعاوني في المدارس الابتدائية"
  },
  {
    year: 'بكالورويس',
    degree: '    جامعة الملك عبدالعزيز - كلية التربية  ',
    university: 'مكة المكرمة',
    description:
      'أطروحة بعنوان: "الأسس المعرفية والاجتماعية للتعلم التعاوني في المدارس الابتدائية".',
      major:"علم نفس ",
      thesis:"الأسس المعرفية والاجتماعية للتعلم التعاوني في المدارس الابتدائية"
  },
  {
    year: 'ماجستير',
    degree: 'جامعة سان دييغو',
    university: 'سان دييغو - الولايات المتحدة الامريكية',
    description:
      'أطروحة بعنوان: "الأسس المعرفية والاجتماعية للتعلم التعاوني في المدارس الابتدائية".',
      major:"علم نفس تربوي ",
      thesis:"الأسس المعرفية والاجتماعية للتعلم التعاوني في المدارس الابتدائية"
  },
  // Removed the duplicate 2021 entry here
];


/* =========================
   Publications
========================= */

export const PUBLICATIONS: Publication[] = [
  {
    title: 'هندسة التعلم: الفضاء والمكان',
    year: '1994',
    publisher: 'دار النشر الأكاديمية',
    description:
      'استكشاف لكيفية تأثير البيئات المادية على النتائج التعليمية والنمو النفسي للطفل.',
    pdfUrl: '#',
    coverImage:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'أصوات من قلب الفصل الدراسي',
    year: '2005',
    publisher: 'مركز النشر العلمي',
    description:
      'دراسة طولية لديناميكيات العلاقة بين المعلم والطالب على مدى ثلاثة عقود من التجربة.',
    pdfUrl: '#',
    coverImage:
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop',
  },
  {
    title: 'تربية المستقبل: الأخلاق في العصر الرقمي',
    year: '2018',
    publisher: 'دار الفكر العربي',
    description:
      'فحص تأثير الذكاء الاصطناعي والمنصات الرقمية على تطور الهوية في مرحلة الطفولة.',
    pdfUrl: '#',
    coverImage:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop',
  },
];

/* =========================
   Quotes
========================= */

export const QUOTES: QuoteItem[] = [
  {
    text:
      'التعليم ليس مجرد نقل للمعرفة، بل هو إشعال لفتيل الفضول الذي يدوم مدى الحياة.',
    source: 'كلمة حفل التخرج، 2015',
  },
  {
    text: 'أن تُعلّم يعني أن تنخرط في حوار مستمر وفاعل مع المستقبل.',
    source: "مقدمة كتاب 'هندسة التعلم'",
  },
];

/* =========================
   Articles
========================= */

export const ARTICLES: Article[] = [
  {
    title: 'الأزمة الصامتة في التعليم الحديث',
    date: 'مارس 2023',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'مقال رأي حول تراجع اللعب الإبداعي في التعليم المبكر وتأثيره على الابتكار.',
    url: '#',
  },
  {
    title: 'تأملات في أربعين عاماً من التدريس',
    date: 'يونيو 2021',
    type: ARTICLE_TYPES.TEXT,
    excerpt:
      'مقال شخصي يسرد التحولات في الفلسفة التربوية من الثمانينات حتى اليوم.',
    url: '#',
  },
  {
    title: 'إصلاح المناطق التعليمية (قصاصة 1990)',
    date: 'نوفمبر 1990',
    type: ARTICLE_TYPES.SCANNED,
    excerpt:
      'صورة ممسوحة ضوئياً لتقرير صحفي أصلي حول إصلاحات التعليم المحلية.',
    url: '#',
  },
  {
    title: 'تحليل مقارن لمعدلات القرائية',
    date: 'يناير 2012',
    type: ARTICLE_TYPES.PDF,
    excerpt:
      'تقرير بحثي مفصل مقدم لوزارة التعليم حول اتجاهات القراءة لدى الشباب.',
    url: '#',
  },
];