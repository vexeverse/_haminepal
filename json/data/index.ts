import imgFront from "@/assets/img/earthquake/front.png";
import imgBack from "@/assets/img/earthquake/back.png";

const dummyData: any = {
  campaign: {
    causes: [
      {
        id: 1,
        title: "Flood Relief Efforts in Kagbeni, Mustang, 2023",
        category: "Disaster Relief",
        geo_lat: 27.717,
        geo_long: 85.323,
        introduction:
          "Join us in providing immediate relief to the flood-affected residents of Kagbeni, Mustang, in 2023.",
        description:
          "Kagbeni, a picturesque village in Mustang, was hit by devastating floods in 2023. Many families have lost their homes and belongings. We are mobilizing resources to provide emergency relief, including food, shelter, and medical assistance, to the affected residents.",
        imgFront: imgFront.src,
        imgBack: imgBack.src,
        image_album: [
          {
            id: 0,
            title: "thumbnail",
            alt: "x",
            default: true,
            image:
              "https://images.pexels.com/photos/7806173/pexels-photo-7806173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
          {
            id: 1,
            title: "showcase",
            alt: "x",
            default: true,
            image:
              "https://images.pexels.com/photos/15823387/pexels-photo-15823387/free-photo-of-rescuers-on-ruins-after-earthquake-in-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
        ],
        video_album: 3,
        tags: {
          tag1: "Flood Relief",
          tag2: "Humanitarian",
          tag3: "Emergency Aid",
        },
        challenges:
          "Access to the affected area is challenging due to damaged roads and bridges. Funding is needed for immediate relief supplies.",
        results:
          "To date, we have provided food and shelter to over 500 families in Kagbeni, and our relief efforts are ongoing.",
        status: "ongoing",
        volunteers: [5, 6, 7],
        leader: 8,
        start_date: "2023-07-15",
        end_date: "2023-12-31",
        donation_goal: 75000,
        current_donations: 35000,
        website: "https://www.kagbenirelief.org",
        contact_email: "info@kagbenirelief.org",
        social_media: {
          facebook: "https://www.facebook.com/kagbenirelief",
          twitter: "https://twitter.com/kagbenirelief",
        },
        campaign_phases: [
          {
            id: 1,
            name: "Emergency Aid Distribution",
            description:
              "Distribute essential items such as food, clean water, and temporary shelter to flood-affected families.",
            comes_after: 0,
            organized_by: 8,
            start_date: "2023-07-20",
            type: "event",
            amount: "25000",
            completion_amount: "25000",
            quantity: 10000,
            completion_quantity: 10000,
            goods_name: "Emergency Supplies",
            state: "completed",
            cause: "Flood Relief",
            end_date: "2023-08-10",
            img: "https://images.unsplash.com/photo-1626695840539-a8821cdbcd9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3182&q=80",
          },
          {
            id: 2,
            name: "Reconstruction Efforts",
            description:
              "Initiate rebuilding of damaged homes and infrastructure in Kagbeni.",
            comes_after: 1,
            organized_by: 8,
            start_date: "2023-08-15",
            type: "project",
            amount: "50000",
            completion_amount: "20000",
            quantity: 20,
            completion_quantity: 8,
            goods_name: "Construction Materials",
            state: "ongoing",
            cause: "Flood Relief",
            end_date: "2023-12-31",
            img: "https://images.unsplash.com/photo-1641213131995-06e2cf0790d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60",
          },
          {
            id: 1,
            name: "Emergency Aid Distribution",
            description:
              "Distribute essential items such as food, clean water, and temporary shelter to flood-affected families.",
            comes_after: 0,
            organized_by: 8,
            start_date: "2023-07-20",
            type: "event",
            amount: "25000",
            completion_amount: "25000",
            quantity: 10000,
            completion_quantity: 10000,
            goods_name: "Emergency Supplies",
            state: "completed",
            cause: "Flood Relief",
            end_date: "2023-08-10",
            img: "https://images.unsplash.com/photo-1626695840539-a8821cdbcd9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3182&q=80",
          },
        ],
      },
      {
        id: 2,
        title: "Nepal for Turkey, Disaster Relief Effort",
        category: "Disaster Relief",
        geo_lat: 28.267,
        geo_long: 83.975,
        introduction:
          "Support our mission to provide aid and relief to the disaster-stricken regions of Turkey.",
        description:
          "In the wake of a devastating natural disaster in Turkey, we, as the Nepal for Turkey initiative, are extending our hand to provide essential relief supplies, medical assistance, and support to the affected communities. Let's stand together in this time of need!",
        image_album: [
          {
            id: 0,
            title: "thumbnail",
            alt: "x",
            default: true,
            image:
              "https://images.pexels.com/photos/7806173/pexels-photo-7806173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
          {
            id: 1,
            title: "showcase",
            alt: "x",
            default: true,
            image:
              "https://images.pexels.com/photos/15823387/pexels-photo-15823387/free-photo-of-rescuers-on-ruins-after-earthquake-in-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
          {
            id: 3,
            title: "foreground",
            alt: "x",
            default: true,
            image: imgFront.src,
          },
          {
            id: 4,
            title: "background",
            alt: "x",
            default: true,
            image: imgBack.src,
          },
        ],
        video_album: 5,
        tags: {
          tag1: "Disaster Relief",
          tag2: "International Aid",
          tag3: "Emergency Assistance",
        },
        challenges:
          "Logistics and coordination with Turkish authorities are challenging. We need funding and volunteers to support our efforts.",
        results:
          "We have delivered medical supplies and relief packages to several affected regions in Turkey, and our work continues.",
        status: "ongoing",
        volunteers: [10, 11, 12],
        leader: 13,
        start_date: "2023-09-01",
        end_date: "2023-12-31",
        donation_goal: 100000,
        current_donations: 45000,
        website: "https://www.nepalforturkey.org",
        contact_email: "info@nepalforturkey.org",
        social_media: {
          facebook: "https://www.facebook.com/nepalforturkey",
          twitter: "https://twitter.com/nepalforturkey",
        },
        campaign_phases: [
          {
            id: 1,
            name: "Emergency Relief Dispatch",
            description:
              "Swiftly send emergency relief supplies and medical teams to affected regions in Turkey.",
            comes_after: 0,
            organized_by: 13,
            start_date: "2023-09-05",
            type: "event",
            amount: "35000",
            completion_amount: "35000",
            quantity: 8000,
            completion_quantity: 8000,
            goods_name: "Relief Packages",
            state: "completed",
            cause: "Disaster Relief",
            end_date: "2023-09-20",
          },
          {
            id: 2,
            name: "Rebuilding Communities",
            description:
              "Initiate long-term rebuilding projects to help affected communities recover.",
            comes_after: 1,
            organized_by: 13,
            start_date: "2023-09-25",
            type: "project",
            amount: "65000",
            completion_amount: "20000",
            quantity: 10,
            completion_quantity: 3,
            goods_name: "Construction Materials",
            state: "ongoing",
            cause: "Disaster Relief",
            end_date: "2023-12-31",
          },
        ],
      },
      {
        id: 3,
        title: "Relief to Earthquake Victims of Chitwan",
        category: "Disaster Relief",
        geo_lat: 27.714,
        geo_long: 85.308,
        introduction:
          "Join us in providing much-needed relief to the earthquake victims in the Chitwan region.",
        description:
          "Chitwan has recently been struck by a powerful earthquake, leaving many families in distress. We are dedicated to offering immediate relief, including food, shelter, and medical aid, to those affected by this disaster.",
        image_album: [
          {
            id: 0,
            title: "thumbnail",
            alt: "x",
            default: true,
            image:
              "https://images.pexels.com/photos/18497628/pexels-photo-18497628/free-photo-of-cow-lying-in-a-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            id: 1,
            title: "showcase",
            alt: "x",
            default: true,
            image:
              "https://images.pexels.com/photos/15823387/pexels-photo-15823387/free-photo-of-rescuers-on-ruins-after-earthquake-in-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
          {
            id: 3,
            title: "foreground",
            alt: "x",
            default: true,
            image: imgFront.src,
          },
          {
            id: 4,
            title: "background",
            alt: "x",
            default: true,
            image: imgBack.src,
          },
        ],
        video_album: 7,
        tags: {
          tag1: "Earthquake Relief",
          tag2: "Humanitarian",
          tag3: "Emergency Aid",
        },
        challenges:
          "Transporting relief supplies to Chitwan is a challenge due to damaged roads. Funding is crucial for our relief efforts.",
        results:
          "We have distributed emergency supplies to hundreds of families in Chitwan and are continuing our relief operations.",
        status: "ongoing",
        volunteers: [15, 16, 17],
        leader: 18,
        start_date: "2023-10-10",
        end_date: "2024-03-31",
        donation_goal: 60000,
        current_donations: 28000,
        website: "https://www.chitwanearthquakeaid.org",
        contact_email: "info@chitwanearthquakeaid.org",
        social_media: {
          facebook: "https://www.facebook.com/chitwanearthquakeaid",
          twitter: "https://twitter.com/chitwanrelief",
        },
        campaign_phases: [
          {
            id: 1,
            name: "Emergency Aid Distribution",
            description:
              "Deliver vital supplies such as food, clean water, and temporary shelter to earthquake victims in Chitwan.",
            comes_after: 0,
            organized_by: 18,
            start_date: "2023-10-15",
            type: "event",
            amount: "28000",
            completion_amount: "28000",
            quantity: 7500,
            completion_quantity: 7500,
            goods_name: "Emergency Supplies",
            state: "completed",
            cause: "Earthquake Relief",
            end_date: "2023-11-05",
          },
          {
            id: 2,
            name: "Reconstruction Initiatives",
            description:
              "Commence reconstruction projects to help rebuild homes and infrastructure in Chitwan.",
            comes_after: 1,
            organized_by: 18,
            start_date: "2023-11-10",
            type: "project",
            amount: "45000",
            completion_amount: "15000",
            quantity: 12,
            completion_quantity: 4,
            goods_name: "Construction Materials",
            state: "ongoing",
            cause: "Earthquake Relief",
            end_date: "2024-03-31",
          },
        ],
      },
      {
        id: 4,
        title:
          "Save Ghopa Camp - An Initiative to Save a Mismanaged Hospital in Dharan",
        category: "Disaster Relief",
        geo_lat: 28.205,
        geo_long: 84.041,
        introduction:
          "Join our mission to rescue Ghopa Camp Hospital in Dharan from mismanagement and restore quality healthcare services.",
        description:
          "Ghopa Camp Hospital in Dharan, once a beacon of healthcare in the region, is now suffering due to mismanagement. We aim to raise funds and mobilize resources to save and revitalize this vital institution.",
        image_album: 8,
        video_album: 9,
        tags: {
          tag1: "Healthcare",
          tag2: "Community Development",
          tag3: "Hospital Restoration",
        },
        challenges:
          "Overcoming bureaucratic hurdles and securing sufficient funding are the main challenges in this mission.",
        results:
          "We have initiated efforts to address mismanagement and restore the hospital's functionality. The journey continues.",
        status: "ongoing",
        volunteers: [20, 21, 22],
        leader: 23,
        start_date: "2023-11-01",
        end_date: "2024-06-30",
        donation_goal: 80000,
        current_donations: 38000,
        website: "https://www.saveghopahospital.org",
        contact_email: "info@saveghopahospital.org",
        social_media: {
          facebook: "https://www.facebook.com/saveghopahospital",
          twitter: "https://twitter.com/saveghopahosp",
        },
        campaign_phases: [
          {
            id: 1,
            name: "Hospital Assessment",
            description:
              "Conduct a comprehensive assessment of Ghopa Camp Hospital to identify areas of improvement.",
            comes_after: 0,
            organized_by: 23,
            start_date: "2023-11-10",
            type: "event",
            amount: "15000",
            completion_amount: "15000",
            quantity: 1,
            completion_quantity: 1,
            goods_name: "Assessment Report",
            state: "completed",
            cause: "Hospital Restoration",
            end_date: "2023-11-25",
          },
          {
            id: 2,
            name: "Improvement Initiatives",
            description:
              "Implement improvement projects based on the assessment findings to restore the hospital's quality of care.",
            comes_after: 1,
            organized_by: 23,
            start_date: "2023-12-01",
            type: "project",
            amount: "35000",
            completion_amount: "12000",
            quantity: 6,
            completion_quantity: 2,
            goods_name: "Medical Equipment",
            state: "ongoing",
            cause: "Hospital Restoration",
            end_date: "2024-06-30",
          },
        ],
      },
      {
        id: 5,
        title: "Village Fire - Relief Program for Mustang",
        category: "Disaster Relief",
        geo_lat: 27.964,
        geo_long: 84.682,
        introduction:
          "Support our efforts to provide relief to the victims of the devastating village fire in Mustang.",
        description:
          "A massive fire has ravaged a village in Mustang, leaving families homeless and in need of immediate assistance. We are committed to providing relief, including temporary shelter, food, and other essentials, to the affected villagers.",
        image_album: 10,
        video_album: 11,
        tags: {
          tag1: "Disaster Relief",
          tag2: "Emergency Aid",
          tag3: "Community Support",
        },
        challenges:
          "Reaching the remote village and providing aid in a timely manner is a significant challenge. Funds are urgently needed for relief supplies.",
        results:
          "We have begun distributing relief supplies to the affected villagers and are working to help them rebuild their lives.",
        status: "ongoing",
        volunteers: [25, 26, 27],
        leader: 28,
        start_date: "2023-12-10",
        end_date: "2024-06-30",
        donation_goal: 45000,
        current_donations: 22000,
        website: "https://www.mustangvillagerelief.org",
        contact_email: "info@mustangvillagerelief.org",
        social_media: {
          facebook: "https://www.facebook.com/mustangvillagerelief",
          twitter: "https://twitter.com/mustangrelief",
        },
        campaign_phases: [
          {
            id: 1,
            name: "Emergency Aid Distribution",
            description:
              "Deliver essential supplies such as food, shelter, and clothing to the fire-affected villagers in Mustang.",
            comes_after: 0,
            organized_by: 28,
            start_date: "2023-12-15",
            type: "event",
            amount: "22000",
            completion_amount: "22000",
            quantity: 5000,
            completion_quantity: 5000,
            goods_name: "Relief Packages",
            state: "ongoing",
            cause: "Disaster Relief",
            end_date: "2024-01-15",
          },
          {
            id: 2,
            name: "Rehabilitation Assistance",
            description:
              "Provide support for rebuilding homes and community infrastructure in the affected village.",
            comes_after: 1,
            organized_by: 28,
            start_date: "2024-01-20",
            type: "project",
            amount: "23000",
            completion_amount: "6000",
            quantity: 10,
            completion_quantity: 2,
            goods_name: "Construction Materials",
            state: "ongoing",
            cause: "Disaster Relief",
            end_date: "2024-06-30",
          },
        ],
      },
    ],
  },

  aok: [
    {
      id: 2,
      startDate: "10 June, 2023",
      //endDate: "15 June, 2023",
      name: "Help Mubin Go Back to School",
      description:
        "Raising funds to support Mubin's education and enable him to continue his studies.",
      category: "Donation",
      subcategory: "Education",
      events: 3,
      volunteer: 40,
      participants: 1500,
      donationTotal: 100000,
      donation: 75000,
      img: "https://images.unsplash.com/photo-1620337233295-b03852738f29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    },
    {
      id: 3,
      startDate: "5 July, 2023",
      //endDate: "7 July, 2023",
      name: "Supporting Orphanage Renovation",
      description:
        "Assisting in renovating and improving living conditions for children in an orphanage.",
      category: "Donation",
      subcategory: "Children",
      events: 1,
      volunteer: 10,
      participants: 500,
      donationTotal: 50000,
      donation: 35000,
      img: "https://images.unsplash.com/photo-1591653221250-2782de1e21a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80",
    },
    {
      id: 4,
      startDate: "15 August, 2023",
      endDate: "18 August, 2023",
      name: "Providing Medical Supplies to Rural Communities",
      description:
        "Delivering essential medical supplies to underserved communities in rural areas.",
      category: "Donation",
      subcategory: "Health",
      events: 2,
      volunteer: 25,
      participants: 800,
      donationTotal: 80000,
      donation: 50000,
      img: "https://images.unsplash.com/photo-1599318524598-6274dfab44ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    {
      id: 5,
      startDate: "2 September, 2023",
      endDate: "5 September, 2023",
      name: "Helping Hand for Senior Citizens",
      description:
        "Providing assistance and support to senior citizens in need of care and companionship.",
      category: "Donation",
      subcategory: "Elderly",
      events: 1,
      volunteer: 15,
      participants: 1000,
      donationTotal: 75000,
      donation: 60000,
      img: "https://images.unsplash.com/photo-1543860856-79e478a9452b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5lcGFsJTIwY292aWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 6,
      startDate: "20 October, 2023",
      endDate: "22 October, 2023",
      name: "Clean Water for Rural Communities",
      description:
        "Providing clean and safe drinking water to communities in remote rural areas.",
      category: "Donation",
      subcategory: "Water",
      events: 3,
      volunteer: 50,
      participants: 200,
      donationTotal: 40000,
      donation: 20000,
      img: "https://images.sbs.com.au/dims4/default/d4fbff0/2147483647/strip/true/crop/800x450+0+42/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2Fdrupal%2Fyourlanguage%2Fpublic%2Fpodcasts%2Fsite_197_Nepalese_476221.JPG",
    },
    {
      id: 7,
      startDate: "12 November, 2023",
      endDate: "15 November, 2023",
      name: "Art Supplies for Underprivileged Children",
      description:
        "Supplying art materials to underprivileged children to encourage their creativity and expression.",
      category: "Donation",
      subcategory: "Arts",
      events: 1,
      volunteer: 8,
      participants: 300,
      donationTotal: 20000,
      donation: 18000,
      img: "https://files.globalgiving.org/pfil/35795/ph_35795_143587.jpg?m=1543062103000",
    },
    {
      id: 8,
      startDate: "5 December, 2023",
      endDate: "7 December, 2023",
      name: "Providing Solar Panels for Rural Areas",
      description:
        "Installing solar panels in rural areas to promote renewable energy and improve living conditions.",
      category: "Donation",
      subcategory: "Renewable Energy",
      events: 2,
      volunteer: 30,
      participants: 500,
      donationTotal: 100000,
      donation: 90000,
      img: "https://s01.sgp1.cdn.digitaloceanspaces.com/article/171116-uqynqojztj-1646555667.jpg",
    },
    {
      id: 9,
      startDate: "20 January, 2024",
      endDate: "22 January, 2024",
      name: "Helping Refugees Build a Better Future",
      description:
        "Supporting refugees in rebuilding their lives and providing them with resources for a brighter future.",
      category: "Donation",
      subcategory: "Humanitarian",
      events: 1,
      volunteer: 10,
      participants: 50,
      donationTotal: 15000,
      donation: 12000,
      img: "https://images.squarespace-cdn.com/content/v1/5808d7e5e6f2e1a9caee487a/1477329288292-8BGQK4U5EQGLOKX6HXZG/camp+pic.jpg?format=2500w",
    },
    {
      id: 10,
      startDate: "10 February, 2024",
      endDate: "12 February, 2024",
      name: "Supporting Sustainable Farming Practices",
      description:
        "Promoting sustainable farming practices by providing training and resources to farmers.",
      category: "Donation",
      subcategory: "Environment",
      events: 1,
      volunteer: 5,
      participants: 100,
      donationTotal: 25000,
      donation: 20000,
      img: "https://files.globalgiving.org/pfil/12849/pict_original.jpg?m=1357230391000",
    },
  ],

  transparency: {
    spent: [
      {
        id: 1,
        campaign: "Save Ghopa Camp",
        particular: "Flex Boards",
        donor: "KM Press",
        quantity: "-",
        amount: "25,000",
        date: String(new Date()).substring(0, 15),
      },
      {
        id: 2,
        campaign: "Save Ghopa Camp",
        particular: "-",
        donor: "KM Press",
        quantity: "-",
        amount: "65,000",
        date: String(new Date()).substring(0, 15),
      },
      {
        id: 3,
        campaign: "",
        particular: "-",
        donor: "Anonymous",
        quantity: "-",
        amount: "15,000",
        date: String(new Date()).substring(0, 15),
      },
      {
        id: 3,
        campaign: "Earthquake Relief",
        particular: "Jackets",
        donor: "North Face",
        quantity: "100",
        amount: "15,000",
        date: String(new Date()).substring(0, 15),
      },
      {
        id: 4,
        campaign: "In-House Expenses",
        particular: "-",
        donor: "Anonymous",
        quantity: "-",
        amount: "5,000",
        date: String(new Date()).substring(0, 15),
      },
      {
        id: 5,
        campaign: "Education Support",
        particular: "School Supplies",
        donor: "ABC Foundation",
        quantity: "200",
        amount: "50,000",
        date: "July 28, 2023",
      },
      {
        id: 6,
        campaign: "Healthcare Initiative",
        particular: "Medicines",
        donor: "XYZ Pharmaceuticals",
        quantity: "-",
        amount: "30,000",
        date: "July 28, 2023",
      },
      {
        id: 7,
        campaign: "Clean Water Project",
        particular: "Water Filters",
        donor: "Clean Aqua Inc.",
        quantity: "50",
        amount: "10,000",
        date: "July 27, 2023",
      },
      {
        id: 8,
        campaign: "Disaster Relief",
        particular: "-",
        donor: "Anonymous",
        quantity: "-",
        amount: "20,000",
        date: "July 27, 2023",
      },
      {
        id: 9,
        campaign: "Community Development",
        particular: "Tools",
        donor: "Builders Association",
        quantity: "30",
        amount: "15,000",
        date: "July 26, 2023",
      },
      {
        id: 10,
        campaign: "Wildlife Conservation",
        particular: "Binoculars",
        donor: "Wildlife Enthusiasts Club",
        quantity: "5",
        amount: "8,000",
        date: "July 26, 2023",
      },
      {
        id: 11,
        campaign: "Empowering Women",
        particular: "Sewing Machines",
        donor: "Women Empowerment NGO",
        quantity: "10",
        amount: "25,000",
        date: "July 25, 2023",
      },
      {
        id: 12,
        campaign: "Food Drive",
        particular: "Rice",
        donor: "ABC Supermarket",
        quantity: "500 kg",
        amount: "40,000",
        date: "July 25, 2023",
      },
      {
        id: 13,
        campaign: "Education Support",
        particular: "Laptops",
        donor: "Tech Solutions Inc.",
        quantity: "20",
        amount: "60,000",
        date: "July 24, 2023",
      },
      {
        id: 14,
        campaign: "Disaster Relief",
        particular: "-",
        donor: "Anonymous",
        quantity: "-",
        amount: "12,000",
        date: "July 24, 2023",
      },
      {
        id: 15,
        campaign: "Environmental Cleanup",
        particular: "Gloves",
        donor: "Green Earth Organization",
        quantity: "200",
        amount: "8,000",
        date: "July 23, 2023",
      },
      {
        id: 16,
        campaign: "Healthcare Support",
        particular: "Medical Equipment",
        donor: "Healthcare Solutions Ltd.",
        quantity: "5",
        amount: "30,000",
        date: "July 23, 2023",
      },
      {
        id: 17,
        campaign: "Community Development",
        particular: "Books",
        donor: "Book Lovers Club",
        quantity: "300",
        amount: "18,000",
        date: "July 22, 2023",
      },
      {
        id: 18,
        campaign: "Education Support",
        particular: "School Uniforms",
        donor: "Uniform Manufacturers Inc.",
        quantity: "100",
        amount: "20,000",
        date: "July 22, 2023",
      },
      {
        id: 19,
        campaign: "Disaster Relief",
        particular: "-",
        donor: "Anonymous",
        quantity: "-",
        amount: "10,000",
        date: "July 21, 2023",
      },
      {
        id: 20,
        campaign: "Animal Shelter",
        particular: "Pet Food",
        donor: "Pet Lovers Society",
        quantity: "50 kg",
        amount: "5,000",
        date: "July 21, 2023",
      },
    ],
  },
  supporters: [
    {
      img: "https://dogstudio.co/app/uploads/2019/02/new-york-times.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/american-airlines.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/microsoft.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/msi.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/alexander-mcqueen.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/eastpack.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/rappi.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/quanta.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/burger-king.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/navy-pier.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/jfk.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/adobe.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/crypt.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/kikk.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/verizon.png",
    },
  ],
  team: [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St, City, Country",
      image: "https://i.pravatar.cc/150?img=1",
      mobile_number: "+1234567890",
      dob: "1990-05-20",
      bio: "I'm a dedicated volunteer looking to make a positive impact in my community.",
      motivation:
        "I believe in the power of helping others and giving back to society.",
      field_of_expertise: "Education",
      blood_group: "O+",
      badges: [1, 2],
      social: {
        facebook: "https://www.facebook.com/user1",
        twitter: "https://twitter.com/user1",
      },
      created_at: "2023-10-15T15:38:21.318Z",
      updated_at: "2023-10-15T15:38:21.318Z",
    },
    {
      id: 2,
      name: "John Doe",
      address: "456 Elm Rd, Town, Country",
      image: "https://i.pravatar.cc/150?img=2",
      mobile_number: "+9876543210",
      dob: "1985-12-10",
      bio: "Passionate about environmental conservation and wildlife protection.",
      motivation:
        "I want to ensure a better future for our planet and its inhabitants.",
      field_of_expertise: "Environmental Science",
      blood_group: "B-",
      badges: [3],
      social: {
        linkedin: "https://www.linkedin.com/in/user2",
        instagram: "https://www.instagram.com/user2",
      },
      created_at: "2023-10-15T15:38:21.318Z",
      updated_at: "2023-10-15T15:38:21.318Z",
    },
    {
      id: 3,
      name: "John Doe",
      address: "789 Oak Ave, City, Country",
      image: "https://i.pravatar.cc/150?img=3",
      mobile_number: "+5555555555",
      dob: "1995-03-25",
      bio: "I'm a medical professional with a commitment to providing healthcare to underserved communities.",
      motivation:
        "Health is a basic human right, and I want to make a difference in people's lives.",
      field_of_expertise: "Medicine",
      blood_group: "A-",
      badges: [4, 5],
      social: {
        twitter: "https://twitter.com/user3",
        instagram: "https://www.instagram.com/user3",
      },
      created_at: "2023-10-15T15:38:21.318Z",
      updated_at: "2023-10-15T15:38:21.318Z",
    },
    {
      id: 4,
      name: "John Doe",
      address: "321 Pine Ln, Town, Country",
      image: "https://i.pravatar.cc/150?img=4",
      mobile_number: "+1111111111",
      dob: "1980-07-15",
      bio: "A software engineer with a passion for coding and community outreach.",
      motivation:
        "I love coding and want to teach it to underprivileged youth.",
      field_of_expertise: "Computer Science",
      blood_group: "AB+",
      badges: [6],
      social: {
        facebook: "https://www.facebook.com/user4",
        linkedin: "https://www.linkedin.com/in/user4",
      },
      created_at: "2023-10-15T15:38:21.318Z",
      updated_at: "2023-10-15T15:38:21.318Z",
    },
    {
      id: 5,
      address: "555 Cedar Rd, City, Country",
      image: "https://i.pravatar.cc/150?img=5",
      mobile_number: "+9999999999",
      dob: "1982-09-05",
      bio: "A chef who enjoys preparing meals for those in need.",
      motivation:
        "Food brings people together, and I want to provide delicious meals to the hungry.",
      field_of_expertise: "Culinary Arts",
      blood_group: "O-",
      badges: [7, 8],
      social: {
        instagram: "https://www.instagram.com/user5",
        twitter: "https://twitter.com/user5",
      },
      created_at: "2023-10-15T15:38:21.318Z",
      updated_at: "2023-10-15T15:38:21.318Z",
    },
    {
      id: 6,
      name: "John Doe",
      address: "101 Redwood Dr, Town, Country",
      image: "https://i.pravatar.cc/150?img=6",
      mobile_number: "+7777777777",
      dob: "1988-11-30",
      bio: "A teacher dedicated to providing quality education to disadvantaged children.",
      motivation: "Every child deserves a chance to learn and succeed.",
      field_of_expertise: "Education",
      blood_group: "A+",
      badges: [9],
      social: {
        facebook: "https://www.facebook.com/user6",
        linkedin: "https://www.linkedin.com/in/user6",
      },
      created_at: "2023-10-15T15:38:21.318Z",
      updated_at: "2023-10-15T15:38:21.318Z",
    },
    {
      id: 7,
      name: "John Doe",
      address: "222 Birch Ave, City, Country",
      image: "https://i.pravatar.cc/150?img=7",
      mobile_number: "+6666666666",
      dob: "1998-04-18",
      bio: "A graphic designer with a passion for creating impactful visuals for nonprofits.",
      motivation:
        "Design has the power to convey important messages and inspire change.",
      field_of_expertise: "Graphic Design",
      blood_group: "B+",
      badges: [10, 11],
      social: {
        instagram: "https://www.instagram.com/user7",
        twitter: "https://twitter.com/user7",
      },
      created_at: "2023-10-15T15:38:21.318Z",
      updated_at: "2023-10-15T15:38:21.318Z",
    },
    {
      id: 8,
      address: "444 Maple Ln, Town, Country",
      image: "https://i.pravatar.cc/150?img=8",
      mobile_number: "+3333333333",
      dob: "1992-06-12",
      bio: "An architect dedicated to designing sustainable and affordable housing.",
      motivation:
        "I believe in creating spaces that improve people's lives and the environment.",
      field_of_expertise: "Architecture",
      blood_group: "AB-",
      badges: [12, 13],
      social: {
        linkedin: "https://www.linkedin.com/in/user8",
        facebook: "https://www.facebook.com/user8",
      },
      created_at: "2023-10-15T15:38:21.318Z",
      updated_at: "2023-10-15T15:38:21.318Z",
    },
    {
      id: 9,
      name: "John Doe",
      address: "777 Pine Rd, City, Country",
      image: "https://i.pravatar.cc/150?img=9",
      mobile_number: "+2222222222",
      dob: "1987-08-24",
      bio: "A social worker committed to helping vulnerable populations access the support they need.",
      motivation:
        "I want to make a positive impact on the lives of those in need.",
      field_of_expertise: "Social Work",
      blood_group: "O+",
      badges: [14, 15],
      social: {
        twitter: "https://twitter.com/user9",
        instagram: "https://www.instagram.com/user9",
      },
      created_at: "2023-10-15T15:38:21.318Z",
      updated_at: "2023-10-15T15:38:21.318Z",
    },
  ],
};

export default dummyData;
