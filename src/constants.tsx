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
  pub: string;
};

/* =========================
   Timeline Data
========================= */

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: '3 سنوات',
    title: '  محاضر بمعهد المعلمين الثانوي  ',
    institution: 'جازان - مكة المكرمة  ',
    description:''  },
  {
    year: 'سنتان',
    title: '  مدرس بمدرسة الحسين بن علي الثانوية  ',
    institution: 'مكة المكرمة    ',
    description:
''  },
  {
    year: 'سنتان',
    title: 'مدرس بمدرسة طلحة بن عبيدالله الثانوية  ',
    institution: 'مكة المكرمة ',
    description:
''  },
  {
    year: '7 سنوات',
    title: ' محاضر علم نفس بكلية اعداد المعلمين',
    institution: 'ابها   ',
    description:
''  },
  {
    year: 'سنتان',
    title: ' مرشد بمدرسة مكة الثانوية',
    institution: 'مكة المكرمة  ',
    description:
''  },

  {
    year: '3 سنوات',
    title: ' مرشد بمدرسة ابو عبيدة المتوسطة',
    institution: 'مكة المكرمة  ',
    description:
''  },
  {
    year: '10 سنوات',
    title: ' مدير بمدرسة الاحنف بن قيس الابتدائية',
    institution: 'مكة المكرمة  ',
    description:
''  },
];


export const ACADEMIC_DATA: TimelineItemAcademic[] = [
  {
    year: 'الابتدائية',
    degree: 'المدرسة السعودية    ',
    university: 'مكة المكرمة  ',
    description:
'',      major:"",
      thesis:
''  },
 {
    year: 'المتوسطة',
    degree: ' المدرسة الرحمانية  ',
    university: 'مكة المكرمة  ',
    description:
'',      major:"",
      thesis:
''  },
 {
    year: 'الثانوية',
    degree: ' مدرسة الملك عبدالعزيز',
    university: 'مكةالمكرمة  ',
    description:
'',      major:"",
      thesis:
''  },
  {
    year: 'بكالورويس',
    degree: '    جامعة الملك عبدالعزيز - كلية التربية  ',
    university: 'مكة المكرمة',
    description:
'',      major:"علم نفس ",
      thesis:
''  },
  {
    year: 'ماجستير',
    degree: 'جامعة سان دييغو',
    university: 'سان دييغو - الولايات المتحدة الامريكية',
    description:
'',      major:"علم نفس تربوي ",
      thesis:
''  },
  // Removed the duplicate 2021 entry here
];


export const PUBLICATIONS: Publication[] = [
  {
    title: ' كلمات منثورة ',
    year: '1994',
    publisher: ' مطبوعات نادي مكة الثقافي ',
    description:"مما عرضه الخاطر في مجالات شتى ومن وحي القراءة ",
    pdfUrl: '#',
    coverImage:
      'src/assets/bookCover.jpeg',
  },
  
];

/* =========================
   Quotes
========================= */

export const QUOTES: QuoteItem[] = [
  {
    text:
      'بعد مسيرة عقودٍ في التعليم، تأتي لحظة التقاعد لنسلّم راية العلم لمن أتى بعدنا؛ إيماناً بشرف هذه المهنة واستمراراً لرسالتها',
    source: "",
  },
  {
    text: 'أشعر بالفخر والاعتزاز حين أذهب لقضاء أي شأن، فأجد أحد أبنائي الطلاب هناك؛ كان منهم الطبيب، والمهندس، والمدير، والضابط، وحتى في الفضاء احتُفل بي حين كان منهم كابتن طيار!',
    source: "",
  },
];
/* =========================
   Articles
========================= */

export const ARTICLES: Article[] = [
  // {
  //   title: 'الأزمة الصامتة في التعليم الحديث',
  //   date: 'مارس 2023',
  //   type: ARTICLE_TYPES.ONLINE,
  //   excerpt:
  //     'مقال رأي حول تراجع اللعب الإبداعي في التعليم المبكر وتأثيره على الابتكار.',
  //   url: '#',
  // },
  // {
  //   title: 'تأملات في أربعين عاماً من التدريس',
  //   date: 'يونيو 2021',
  //   type: ARTICLE_TYPES.TEXT,
  //   excerpt:
  //     'مقال شخصي يسرد التحولات في الفلسفة التربوية من الثمانينات حتى اليوم.',
  //   url: '#',
  // },
  // {
  //   title: 'إصلاح المناطق التعليمية (قصاصة 1990)',
  //   date: 'نوفمبر 1990',
  //   type: ARTICLE_TYPES.SCANNED,
  //   excerpt:
  //     'صورة ممسوحة ضوئياً لتقرير صحفي أصلي حول إصلاحات التعليم المحلية.',
  //   url: '#',
  // },
  // {
  //   title: 'تحليل مقارن لمعدلات القرائية',
  //   date: 'يناير 2012',
  //   type: ARTICLE_TYPES.PDF,
  //   excerpt:
  //     'تقرير بحثي مفصل مقدم لوزارة التعليم حول اتجاهات القراءة لدى الشباب.',
  //   url: '#',
  // },
  
   {
    title: 'التكامل والتفاضل ما بين الأجهزه الرقميه والكتب المدرسيه ',
    date: '2026-09-04',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'نظام التعليم العام الجديد: شراكة تكاملية بين الأسرة والمدرسة والمجتمع لإعداد جيلٍ صالح ومؤهل يسهم في بناء مستقبل وطنه وفق رؤية 2030',
    url: 'https://www.makkahnews.sa/5514295.html',
    pub: "صحيفة مكة الإلكترونية",
  },
   {
    title: 'دور الأسرة والمدرسة والمجتمع في نظام التعليم العام الجديد ',
    date: '2026-08-07',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'دعوة للتحول نحو المقررات الرقمية لتخفيف ثقل الحقيبة المدرسية ومواكبة التطور التقني، مع صون مهارات الكتابة والخط اليدوي',
    url: 'https://www.makkahnews.sa/5518326.html',
    pub: "صحيفة مكة الإلكترونية",
  },
   {
    title: 'لوّن صيفك',
    date: '2025-08-15',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'حديث عن صيف السعودية 2025 وما يحمله من فعاليات وتجارب سياحية وترفيهية في مناطق مختلفة من المملكة.',
    url: 'https://www.makkahnews.sa/5469239.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'الدبّاب أسرع يا نجم',
    date: '2025-01-06',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'طرح لتجربة مرورية واقعية، يلفت الانتباه لبطء استجابة نجم والحاجة لتدخل أسرع في الحوادث.',
    url: 'https://www.makkahnews.sa/5442022.html',
    pub: "صحيفة مكة الإلكترونية",
  },
   {
    title: 'وطني الحبيب',
    date: '2024-09-22',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'كلمات تعبّر عن مشاعر الانتماء والفخر بالوطن، في مناسبة اليوم الوطني، وما يحمله من معانٍ راسخة.',
    url: 'https://www.makkahnews.sa/5417974.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'سحايب سواح على السعودية',
    date: '2024-08-27',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'نظرة على تنوّع الوجهات السياحية في السعودية، وما تقدمه من تجارب تجذب السياح من داخل المملكة وخارجها.',
    url: 'https://www.makkahnews.sa/5414651.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'التعليم عن بعد',
    date: '2024-05-12',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'حديث عن تجربة التعليم عن بعد، إيجابياتها وتحدياتها، وأثرها على الطلاب والمعلمين.',
    url: 'https://www.makkahnews.sa/5400389.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'يوم التأسيس',
    date: '2024-02-24',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'تأمل في قيمة يوم التأسيس وما يمثله من جذور تاريخية وبدايات الدولة السعودية.',
    url: 'https://www.makkahnews.sa/5390954.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'البيتزا السعودية - Saudi pizza',
    date: '2023-12-17',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'طرح خفيف عن تميّز البيتزا بطابع سعودي، وكيف تتشكل الهوية حتى في التفاصيل اليومية.',
    url: 'https://www.makkahnews.sa/5381975.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'السعودية تكسب اكسبو',
    date: '2023-12-04',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'قراءة في فوز السعودية باستضافة إكسبو، ودلالات هذا الحدث على الحضور العالمي للمملكة.',
    url: 'https://www.makkahnews.sa/5380123.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'يوم المعلم',
    date: '2023-10-04',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'وقفة تقدير لدور المعلم وأثره في بناء الأجيال، بمناسبة يوم المعلم.',
    url: 'https://www.makkahnews.sa/5372239.html',
    pub: "صحيفة مكة الإلكترونية",
  },
   {
    title: 'المهرجانات الاستثمارية السياحية',
    date: '2020-01-29',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'حديث عن دور المهرجانات السياحية في تنشيط الاستثمار وتحريك الاقتصاد المحلي.',
    url: 'https://www.makkahnews.sa/5186809.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'زحام تحت أضواء عام جديد',
    date: '2020-01-02',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'رصد لمشهد الزحام مع بداية عام جديد، وما يعكسه من سلوكيات وتغيرات في نمط الحياة.',
    url: 'https://www.makkahnews.sa/5183967.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'Coffe shop',
    date: '2019-12-23',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'تأمل في انتشار المقاهي ودورها الاجتماعي، بعيدًا عن كونها مجرد مكان للقهوة.',
    url: 'https://www.makkahnews.sa/5183010.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'عيدك يا وطن',
    date: '2019-10-02',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'مشاعر وطنية تُكتب احتفالًا باليوم الوطني، وما يحمله من فخر وامتنان.',
    url: 'https://www.makkahnews.sa/5174641.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'لا نخاف من الدمج ولكن..',
    date: '2019-09-08',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'طرح يناقش فكرة الدمج، بين القبول بالمبدأ والتخوف من آلية التطبيق.',
    url: 'https://www.makkahnews.sa/5171918.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'لفة مواسم المملكة',
    date: '2019-08-06',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'جولة على مواسم السعودية المختلفة، وما تقدمه من تنوع ثقافي وسياحي.',
    url: 'https://www.makkahnews.sa/5168132.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'حتى يتعلم الجميع',
    date: '2019-07-23',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'حديث عن أهمية إتاحة التعليم للجميع، ومراعاة الفروق والاحتياجات المختلفة.',
    url: 'https://www.makkahnews.sa/5166291.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'خدمة 24 ساعة',
    date: '2019-07-18',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'نقاش حول الخدمات المستمرة على مدار الساعة وأثرها على جودة الحياة.',
    url: 'https://www.makkahnews.sa/5165716.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'عكس الاتجاه',
    date: '2019-06-30',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'رأي يسلط الضوء على قرارات أو سلوكيات تسير بعكس المتوقع أو السائد.',
    url: 'https://www.makkahnews.sa/5163345.html',
    pub: "صحيفة مكة الإلكترونية",
  },
   {
    title: 'الطفلة كندة',
    date: '2019-03-07',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'تسليط ضوء على قصة إنسانية لطفلة، وما تحمله من معانٍ اجتماعية ومشاعر مؤثرة.',
    url: 'https://www.makkahnews.sa/5148100.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'جسد واحد بقلبين',
    date: '2019-02-17',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'حديث إنساني عن الترابط والدعم، وكيف تجمع القلوب رغم اختلاف الظروف.',
    url: 'https://www.makkahnews.sa/5145836.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'شارع بلا اسم',
    date: '2019-01-31',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'وقفة عند شارع بلا اسم، وما يعكسه من إهمال أو غياب التنظيم.',
    url: 'https://www.makkahnews.sa/5143482.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'اليوم وغداً زمن الصحافة الإلكترونية',
    date: '2019-01-18',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'نظرة على واقع الصحافة الإلكترونية ومستقبلها في ظل التحول الرقمي.',
    url: 'https://www.makkahnews.sa/5141264.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'عام جديد',
    date: '2019-01-03',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'تأملات مع بداية عام جديد، بين الأمل والمراجعة والتطلعات القادمة.',
    url: 'https://www.makkahnews.sa/5138993.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'البيعة الرابعة',
    date: '2018-12-11',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'حديث عن ذكرى البيعة الرابعة وما تحمله من دلالات وطنية.',
    url: 'https://www.makkahnews.sa/5135337.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'رسوم مواقف في أماكن خاطئة!',
    date: '2018-11-30',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'انتقاد لفرض رسوم مواقف في مواقع غير مناسبة وتأثير ذلك على السكان.',
    url: 'https://www.makkahnews.sa/5133265.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'انسيابية الحركة',
    date: '2018-10-29',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'طرح يناقش تنظيم الحركة المرورية وأثره على سهولة التنقل.',
    url: 'https://www.makkahnews.sa/5127026.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'من يستحق',
    date: '2018-08-11',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'تساؤل حول الاستحقاق ومعاييره في العمل أو المجتمع.',
    url: 'https://www.makkahnews.sa/5112901.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'أسماء أحياء شوارع مكة',
    date: '2018-07-19',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'إضاءة على أسماء أحياء وشوارع مكة ودلالاتها التاريخية.',
    url: 'https://www.makkahnews.sa/5108980.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'وابتدأ.. ابتدأ المشوار',
    date: '2018-06-22',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'بداية تجربة أو مرحلة جديدة، وما يصاحبها من حماس وتحديات.',
    url: 'https://www.makkahnews.sa/5103717.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'الدوران',
    date: '2018-06-07',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'تأمل في تكرار المشاهد أو القرارات دون تغيير حقيقي.',
    url: 'https://www.makkahnews.sa/5103717.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'الواسطة والمحسوبية',
    date: '2018-05-12',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'نقاش صريح حول الواسطة وأثرها السلبي على العدالة وتكافؤ الفرص.',
    url: 'https://www.makkahnews.sa/5096484.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'مستقبل مشرق',
    date: '2018-04-30',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'تفاؤل بالمستقبل وما يحمله من فرص وتغيرات إيجابية.',
    url: 'https://www.makkahnews.sa/5093801.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'مبروك يا وحدة',
    date: '2018-04-19',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'تهنئة لأبناء مكة وإنجاز لافت.',
    url: 'https://www.makkahnews.sa/5091333.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'وباء الجرب وماذا بعد؟!',
    date: '2018-04-07',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'تساؤلات حول انتشار الجرب والتعامل معه صحيًا ومجتمعيًا.',
    url: 'https://www.makkahnews.sa/5088346.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'يوم الأم',
    date: '2018-03-23',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'كلمات تقدير للأم ودورها الكبير في الأسرة والمجتمع.',
    url: 'https://www.makkahnews.sa/5084836.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'عمل المرأة',
    date: '2018-03-09',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'نقاش حول عمل المرأة وأثره الاجتماعي والاقتصادي.',
    url: 'https://www.makkahnews.sa/5080752.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'تظليل السيارات',
    date: '2018-02-15',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'حديث عن تظليل السيارات بين الحاجة والتنظيم.',
    url: 'https://www.makkahnews.sa/5073432.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'الصحف الإلكترونية',
    date: '2018-01-16',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'نظرة على واقع الصحف الإلكترونية وتطورها.',
    url: 'https://www.makkahnews.sa/5064153.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'أخيراً نجم وصل',
    date: '2018-01-02',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'تعليق على تجربة مع خدمة نجم بعد انتظار.',
    url: 'https://www.makkahnews.sa/5060500.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'الأدب العربي',
    date: '2017-12-14',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'وقفة مع الأدب العربي وقيمته الثقافية.',
    url: 'https://www.makkahnews.sa/5055243.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'نيوم الشباب قادمون',
    date: '2017-11-16',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'نظرة متفائلة لدور الشباب في مشاريع المستقبل مثل نيوم.',
    url: 'https://www.makkahnews.sa/5048110.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'دخول العوائل للملاعب لأول مرة',
    date: '2017-11-12',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'تأمل في خطوة دخول العوائل للملاعب وأثرها المجتمعي.',
    url: 'https://www.makkahnews.sa/5046825.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'أسماء الشوارع في مكة',
    date: '2017-11-02',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'حديث عن تسمية شوارع مكة وما تحمله من معانٍ.',
    url: 'https://www.makkahnews.sa/5044658.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'مواطن صالح للمستقبل',
    date: '2017-10-30',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'طرح حول بناء المواطن القادر على مواكبة المستقبل.',
    url: 'https://www.makkahnews.sa/5043786.html',
    pub: "صحيفة مكة الإلكترونية",
  },
  {
    title: 'مشروع ساحل البحر الأحمر',
    date: '2017-10-17',
    type: ARTICLE_TYPES.ONLINE,
    excerpt:
      'نظرة على مشروع ساحل البحر الأحمر وأبعاده التنموية.',
    url: 'https://www.makkahnews.sa/5040252.html',
    pub: "صحيفة مكة الإلكترونية",
  },
];