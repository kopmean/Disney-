let test = [
    {
        name: 'falcon and the winter soldier',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 2.PNG'
    },
    {
        name: 'loki',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 1.PNG'
    },
    {
        name: 'wanda vision',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 3.PNG'
    },
    {
        name: 'raya and the last dragon',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 4.PNG'
    },
    {
        name: 'luca',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 5.PNG'
    }
]

let movies = [
    {
        "id": "AS0",
        "name": "24 (Japan)",
        "des": "เจ้าหน้าที่หน่วยซีทียู ชิโด เก็นบะ กำลังปฏิบัติภารกิจลับสุดยอด เพื่อป้องกันการลอบสังหารอะซากุระ อูราระ ผู้ลงสมัครรับเลือกตั้งนายกรัฐมนตรี",
        "Type": ["Disney", "Thriller"],
        "image": "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5772/1025772-h-0570a3e32f4e"
    },
    {
        "id": "AS1",
        "name": "Upin & Ipin",
        "des": "อูปินและอีปิน สองพี่น้องฝาแฝดแสนซนวัยห้าขวบผู้อยากรู้อยากเห็น จะพาคุณไปเรียนรู้และสำรวจสิ่งใหม่ๆ ในชีวิตพร้อมกับครอบครัวและผองเพื่อน",
        "Type": ["Disney", "Kids"],
        "image": "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4179/1054179-h-7136b40bc1da"
    },
    {
        "id": "AS2",
        "name": "นครนรก ซอมบี้คลั่ง",
        "Year": 2018,
        "des": "เรื่องราวที่เกิดขึ้นในเกาหลีสมัยโชซอน เมื่อ องค์ชายกังลิม โอรสของกษัตริย์และนักสู้ฝีมือฉกาจที่สุดของอาณาจักรโชซอน ถูกเรียกตัวกลับบ้านเกิดเพื่อช่วยต่อส...",
        "Type": ["Action"],
        "image": "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6778/1016778-h-699b50adbfeb"
    },
    {
        "id": "AS3",
        "name": "999…9999 ต่อติดตาย",
        "Language": "Thai",
        "des": "หมายเลขโทรศัพท์มรณะ 999-9999 ที่ใครก็สามารถโทรไปขอสิ่งที่ตนปรารถนาได้ และเมื่อโทรไปแล้วก็ได้รับสิ่งที่ใจต้องการ แต่ไม่นานเขาก็ต้องตายอย่างปริศนา",
        "Type": ["Horror"],
        "Year": 2002,
        "image": "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1563/1001563-h"
    },
    {
        "id": "AS4",
        "name": "Zombitopia",
        "des": "เมื่อ 15 ปีก่อน เกิดเหตุไวรัสปริศนาระบาดในหมู่มนุษย์ ทำให้ผู้ติดเชื้อกลายเป็นสิ่งชั่วร้ายและอันตราย",
        "Language": "Malay",
        "Type": ["Horror"],
        "Year": 2021,
        "image": "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3638/1003638-h"
    },
    {
        "id": "AS5",
        "name": "Tombiruo",
        "des": "อีจิมคือองครักษ์ผู้ปกปักษ์รักษาผืนป่าและมีพลังเหนือธรรมชาติโดยการสามารถหยิบยืมพลังจากป่าเขาในบอร์เนียวได้",
        "Language": "Malay",
        "Type": ["Drama"],
        "Year": 2018,
        "image": "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7430/887430-h"
    },
    {
        "id": "AS6",
        "name": "ไอฟาย..แต๊งกิ้ว..เลิฟยู้",
        "des": "หลังจากหมดหวังในการไปอเมริกาเพื่อกลับไปง้อแฟนสาว ยิม ได้จ้าง ครูเพลง ติวเตอร์เพื่อมาสอนภาษาอังกฤษ แต่สิ่งต่างๆ กลับไม่เป็นไปตามแพลน",
        "Language": "Thai",
        "Type": ["Romance"],
        "Year": 2014,
        "image": "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6161/1006161-h-ac8d4bcfa5ad"
    },
    {
        "id": "AS7",
        "name": "Turnaround",
        "des": "หลังเรียบจบจากมหาวิทยาลัย หวังไปฝึกงานที่โรงเรียนประถมในชนบท เขาเตรียมตัวจะลาออกหลังจากนั้นแต่กลับเจอกับเหตุการณ์แผ่นดินไหวไต้หวัน 921 เข้าเสียก่อน",
        "Language": "Mandarin",
        "Type": ["Drama"],
        "Year": 2017,
        "image": "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6078/1016078-h-b6bf29c407ee"
    }
]