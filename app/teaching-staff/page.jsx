import React from "react";

const staffData = [
  {
    id: 1,
    name: "प्रो. उपेंद्र प्रसाद",
    designation: "प्रधानाचार्य",
    subject: "राजनितिक शास्त्र",
    dob: "18-01-1958",
    joining_date: "30-09-1982",
  },
  {
    id: 2,
    name: "प्रो. उमेश चंद्र",
    designation: "सहायक व्याख्याता",
    subject: "हिंदी",
    dob: "25-11-1957",
    joining_date: "30-09-1982",
  },
  {
    id: 3,
    name: "प्रो. डॉ.मुन्नी किशोर सिंह",
    designation: "सहायक व्याख्याता",
    subject: "हिंदी",
    dob: "07-10-1957",
    joining_date: "16-09-1991",
  },
  {
    id: 4,
    name: "प्रो. नयन तारा",
    designation: "सहायक व्याख्याता",
    subject: "हिंदी",
    dob: "11-10-1963",
    joining_date: "28-12-1994",
  },
  {
    id: 5,
    name: "प्रो. मदन शर्मा",
    designation: "सहायक व्याख्याता",
    subject: "अंग्रेजी",
    dob: "06-10-1967",
    joining_date: "09-06-1993",
  },
  {
    id: 6,
    name: "प्रो. जीतेन्द्र कुमार",
    designation: "सहायक व्याख्याता",
    subject: "अंग्रेजी",
    dob: "02-10-1969",
    joining_date: "28-12-1994",
  },
  {
    id: 7,
    name: "प्रो. सुनील कुमार पांडेय",
    designation: "सहायक व्याख्याता",
    subject: "अंग्रेजी",
    dob: "01-01-1975",
    joining_date: "07-01-2000",
  },
  {
    id: 8,
    name: "प्रो. मनोज कुमार",
    designation: "सहायक व्याख्याता",
    subject: "संस्कृत",
    dob: "10-05-1966",
    joining_date: "16-02-1991",
  },
  {
    id: 9,
    name: "प्रो. शिव प्रताप शर्मा",
    designation: "सहायक व्याख्याता",
    subject: "संस्कृत",
    dob: "10-03-1964",
    joining_date: "16-02-1991",
  },
  {
    id: 10,
    name: "प्रो. मो.एहसान",
    designation: "सहायक व्याख्याता",
    subject: "उर्दू",
    dob: "18-01-1971",
    joining_date: "07-01-2000",
  },
  {
    id: 11,
    name: "प्रो. रेनू कुमारी",
    designation: "सहायक व्याख्याता",
    subject: "पाली",
    dob: "24-04-1965",
    joining_date: "16-09-1981",
  },
  {
    id: 12,
    name: "प्रो. गिरीश पांडेय",
    designation: "सहायक व्याख्याता",
    subject: "इतिहास",
    dob: "01-02-1958",
    joining_date: "12-12-1986",
  },
  {
    id: 13,
    name: "प्रो. अखिलेश्वर नारायण दास",
    designation: "सहायक व्याख्याता",
    subject: "इतिहास",
    dob: "03-10-1962",
    joining_date: "12-12-1986",
  },
  {
    id: 14,
    name: "प्रो. संगीता कुमारी",
    designation: "सहायक व्याख्याता",
    subject: "इतिहास",
    dob: "01-04-1963",
    joining_date: "16-02-1991",
  },
  {
    id: 15,
    name: "प्रो. डॉ.सुनील कुमार",
    designation: "सहायक व्याख्याता",
    subject: "इतिहास",
    dob: "11-11-1964",
    joining_date: "16-02-1991",
  },
  {
    id: 16,
    name: "प्रो. ललन प्रसाद",
    designation: "सहायक व्याख्याता",
    subject: "इतिहास",
    dob: "27-09-1961",
    joining_date: "16-02-1991",
  },
  {
    id: 17,
    name: "प्रो. बैदेही शरण सिंह",
    designation: "सहायक व्याख्याता",
    subject: "समाज शास्त्र",
    dob: "27-11-1961",
    joining_date: "08-08-1987",
  },
  {
    id: 18,
    name: "प्रो. संजय कुमार पांडेय",
    designation: "सहायक व्याख्याता",
    subject: "समाज शास्त्र",
    dob: "05-02-1968",
    joining_date: "09-06-1993",
  },
  {
    id: 19,
    name: "प्रो. बिनोद कुमार",
    designation: "सहायक व्याख्याता",
    subject: "राजनितिक शास्त्र",
    dob: "28-01-1962",
    joining_date: "08-06-1987",
  },
  {
    id: 20,
    name: "प्रो. अमरेंद्र कुमार",
    designation: "सहायक व्याख्याता",
    subject: "राजनितिक शास्त्र",
    dob: "04-07-1968",
    joining_date: "28-12-1994",
  },
  {
    id: 21,
    name: "प्रो. डॉ.अरविन्द कुमार",
    designation: "सहायक व्याख्याता",
    subject: "भूगोल",
    dob: "15-04-1962",
    joining_date: "12-12-1986",
  },
  {
    id: 22,
    name: "प्रो. सुनील कुमार सिंह",
    designation: "सहायक व्याख्याता",
    subject: "भूगोल",
    dob: "07-01-1961",
    joining_date: "16-02-1991",
  },
  {
    id: 23,
    name: "प्रो. सुभाष चंद्र सरस",
    designation: "सहायक व्याख्याता",
    subject: "भूगोल",
    dob: "21-02-1967",
    joining_date: "09-06-1993",
  },
  {
    id: 24,
    name: "प्रो. रणजीत भारद्वाज",
    designation: "सहायक व्याख्याता",
    subject: "मनोविज्ञान",
    dob: "23-11-1971",
    joining_date: "09-09-1995",
  },
  {
    id: 25,
    name: "प्रो. सुदर्शन कुमार सत्यबादी",
    designation: "सहायक व्याख्याता",
    subject: "मनोविज्ञान",
    dob: "27-06-1965",
    joining_date: "16-09-2011",
  },
  {
    id: 26,
    name: "प्रो. डॉ. पुष्पा कुमारी",
    designation: "सहायक व्याख्याता",
    subject: "गृह विज्ञान",
    dob: "02-04-1968",
    joining_date: "28-12-1994",
  },
  {
    id: 27,
    name: "प्रो. डॉ. संजू कुमारी",
    designation: "सहायक व्याख्याता",
    subject: "गृह विज्ञान",
    dob: "05-05-1971",
    joining_date: "28-12-1994",
  },
  {
    id: 28,
    name: "प्रो. प्रह्लाद सिंह",
    designation: "सहायक व्याख्याता",
    subject: "प्राचीन इतिहास",
    dob: "25-01-1955",
    joining_date: "30-09-1982",
  },
  {
    id: 29,
    name: "प्रो. रामनरेश पाठक",
    designation: "सहायक व्याख्याता",
    subject: "प्राचीन इतिहास",
    dob: "07-01-1961",
    joining_date: "08-08-1987",
  },
  {
    id: 30,
    name: "प्रो. मुकेश कुमार",
    designation: "सहायक व्याख्याता",
    subject: "प्राचीन इतिहास",
    dob: "15-01-1966",
    joining_date: "16-02-1991",
  },
  {
    id: 31,
    name: "प्रो. दिनेश्वर प्रसाद सिंह",
    designation: "सहायक व्याख्याता",
    subject: "दर्शन शास्त्र",
    dob: "30-06-1961",
    joining_date: "09-06-1993",
  },
  {
    id: 32,
    name: "प्रो. नरेश कुमार शर्मा",
    designation: "सहायक व्याख्याता",
    subject: "दर्शन शास्त्र",
    dob: "18-07-1969",
    joining_date: "28-12-1994",
  },
  {
    id: 33,
    name: "प्रो. सुनीता कुमारी",
    designation: "सहायक व्याख्याता",
    subject: "दर्शन शास्त्र",
    dob: "19-10-1962",
    joining_date: "28-12-1994",
  },
  {
    id: 34,
    name: "प्रो. नरेंद्र कुमार शर्मा",
    designation: "सहायक व्याख्याता",
    subject: "अर्थशास्त्र",
    dob: "28-05-1961",
    joining_date: "12-12-1986",
  },
  {
    id: 35,
    name: "प्रो. अंजनी कुमार",
    designation: "सहायक व्याख्याता",
    subject: "अर्थशास्त्र",
    dob: "20-10-1968",
    joining_date: "09-06-1993",
  },
  {
    id: 36,
    name: "प्रो. विनोद कुमार",
    designation: "सहायक व्याख्याता",
    subject: "बौद्ध अध्ययन",
    dob: "06-06-1957",
    joining_date: "16-02-1991",
  },
  {
    id: 37,
    name: "प्रो. अरविन्द कुमार",
    designation: "सहायक व्याख्याता",
    subject: "बौद्ध अध्ययन",
    dob: "05-11-1965",
    joining_date: "28-12-1994",
  },
  {
    id: 38,
    name: "प्रो. अजय कुमार",
    designation: "सहायक व्याख्याता",
    subject: "भौतिकी",
    dob: "20-02-1967",
    joining_date: "29-12-1994",
  },
  {
    id: 39,
    name: "प्रो. सुनील कुमार",
    designation: "सहायक व्याख्याता",
    subject: "भौतिकी",
    dob: "07-06-1968",
    joining_date: "29-12-1994",
  },
  {
    id: 40,
    name: "प्रो. विजय कुमार",
    designation: "सहायक व्याख्याता",
    subject: "रसयान शास्त्र",
    dob: "11-10-1965",
    joining_date: "08-08-1988",
  },
  {
    id: 41,
    name: "प्रो. सत्येंद्र प्रसाद सिंह",
    designation: "सहायक व्याख्याता",
    subject: "रसयान शास्त्र",
    dob: "27-11-1962",
    joining_date: "09-06-1993",
  },
  {
    id: 42,
    name: "प्रो. डॉ. राजीव कुमार",
    designation: "सहायक व्याख्याता",
    subject: "रसयान शास्त्र",
    dob: "01-01-1968",
    joining_date: "29-12-1994",
  },
  {
    id: 43,
    name: "प्रो.डॉ. प्रतिमा कुमारी",
    designation: "सहायक व्याख्याता",
    subject: "वनस्पति विज्ञान",
    dob: "01-05-1971",
    joining_date: "07-01-2000",
  },
  {
    id: 44,
    name: "प्रो. अश्विनी कुमार",
    designation: "सहायक व्याख्याता",
    subject: "वनस्पति विज्ञान",
    dob: "01-11-1974",
    joining_date: "07-01-2000",
  },
  {
    id: 45,
    name: "प्रो. अनिल कुमार सिन्हा",
    designation: "सहायक व्याख्याता",
    subject: "जंतु विज्ञान",
    dob: "19-11-1967",
    joining_date: "09-06-1993",
  },
  {
    id: 46,
    name: "प्रो. ब्रजेश कुमार शर्मा",
    designation: "सहायक व्याख्याता",
    subject: "जंतु विज्ञान",
    dob: "29-01-1968",
    joining_date: "28-12-1994",
  },
  {
    id: 47,
    name: "प्रो. अमरेंद्र कुमार सिंह",
    designation: "सहायक व्याख्याता",
    subject: "जंतु विज्ञान",
    dob: "30-12-1971",
    joining_date: "28-12-1994",
  },
  {
    id: 48,
    name: "प्रो. सूर्यदेव सिंह यादव",
    designation: "सहायक व्याख्याता",
    subject: "जंतु विज्ञान",
    dob: "02-10-1970",
    joining_date: "28-12-1994",
  },
  {
    id: 49,
    name: "प्रो. अजय कुमार",
    designation: "सहायक व्याख्याता",
    subject: "गणित",
    dob: "12-03-1962",
    joining_date: "08-06-1987",
  },
];

const demoData = [
  {
    id: 1,
    name: "प्रो. उपेंद्र प्रसाद",
    designation: "प्रधानाचार्य",
    subject: "राजनितिक शास्त्र",
    dob: "18-01-1958",
    joining_date: "30-09-1982",
  },
  {
    id: 2,
    name: "प्रो. उमेश चंद्र",
    designation: "सहायक व्याख्याता",
    subject: "हिंदी",
    dob: "25-11-1957",
    joining_date: "30-09-1982",
  },
];

const TeachingStaffPage = () => {
  return (
    <section className="w-full py-[120px]">
      <div className="w-[90%] mx-auto p-10 shadow-lg rounded-md flex flex-col gap-4">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-4xl font-bold">Teaching Staff List</h1>
          <span className="text-primary">Mahabodhi College, Gaya</span>
        </div>

        <table className="text-xs md:text-sm lg:text-base">
          <thead>
            <tr className="bg-primary text-white ">
              <th className="border-r p-2 text-start">क्र. स.</th>
              <th className="border-r p-2 text-start">शिक्षक का नाम</th>
              <th className="border-r p-2 text-start">पदनाम</th>
              <th className="border-r p-2 text-start">विषय</th>
              <th className="border-r p-2 text-start"> जन्म तिथि</th>
              <th className="border-r p-2 text-start">नियुक्ति की तिथि</th>
            </tr>
          </thead>

          {staffData.map((data) => (
            <tr
              key={data.id}
              className={`text-[#212529] p-2 ${
                data.id % 2 != 0 ? "bg-[#F2F2F2]" : "bg-[#fff]"
              }`}
            >
              <td className="p-2">{data.id}</td>
              <td className="p-2">{data.name}</td>
              <td className="p-2">{data.designation}</td>
              <td className="p-2">{data.subject}</td>
              <td className="p-2">{data.dob}</td>
              <td className="p-2">{data.joining_date}</td>
            </tr>
          ))}
        </table>
      </div>
    </section>
  );
};

export default TeachingStaffPage;
