const destinations = {
    "Mountains": {
      "Adventure": {
        "Low": [
          {
            "name": "Rocky Mountains",
            "location": "USA",
            "description": "A rugged mountain range offering thrilling hikes and hidden waterfalls."
          },
          {
            "name": "Appalachian Mountains",
            "location": "USA",
            "description": "A less-traveled range with caves to explore and stories to share by the campfire."
          }
        ],
        "Medium": [
          {
            "name": "Swiss Alps",
            "location": "Switzerland",
            "description": "A perfect balance of adventure and comfort with cozy lodges and stunning hikes."
          },
          {
            "name": "Canadian Rockies",
            "location": "Canada",
            "description": "A combination of exciting rock climbing and relaxing cabin stays."
          }
        ],
        "High": [
          {
            "name": "Himalayas",
            "location": "India/Nepal",
            "description": "Luxury treks with guided tours through stunning landscapes and high-end accommodations."
          },
          {
            "name": "Andes",
            "location": "South America",
            "description": "Experience helicopter rides over mountains and stay in exclusive lodges."
          }
        ]
      },
      "Relaxation": {
        "Low": [
          {
            "name": "Blue Ridge Mountains",
            "location": "USA",
            "description": "Tranquil cabins, serene hikes, and peaceful natural beauty."
          },
          {
            "name": "Appalachian Mountains",
            "location": "USA",
            "description": "Relaxing riverside retreats with rustic, affordable lodges."
          }
        ],
        "Medium": [
          {
            "name": "Swiss Alps",
            "location": "Switzerland",
            "description": "A peaceful vacation with leisure walks in picturesque villages and local delicacies."
          },
          {
            "name": "Rocky Mountains",
            "location": "USA/Canada",
            "description": "Relax in charming lodges and enjoy scenic drives in the heart of nature."
          }
        ],
        "High": [
          {
            "name": "Himalayas",
            "location": "India/Nepal",
            "description": "Stay in exclusive resorts and indulge in private yoga sessions."
          },
          {
            "name": "Alps",
            "location": "France/Switzerland",
            "description": "Relax in high-end chalets with stunning views and gourmet meals."
          }
        ]
      }
    },
    "Beach": {
      "Adventure": {
        "Low": [
          {
            "name": "Thailand Beaches",
            "location": "Thailand",
            "description": "Budget-friendly beaches with water sports and vibrant local culture."
          },
          {
            "name": "Portugal Coast",
            "location": "Portugal",
            "description": "Surfing, hidden coves, and low-cost adventures along the coast."
          }
        ],
        "Medium": [
          {
            "name": "Bali",
            "location": "Indonesia",
            "description": "A mix of thrilling water sports and cultural experiences."
          },
          {
            "name": "Mexico Beaches",
            "location": "Mexico",
            "description": "Parasailing and beach activities balanced with relaxation."
          }
        ],
        "High": [
          {
            "name": "Maldives",
            "location": "Maldives",
            "description": "Exclusive water sports, over-water villas, and underwater restaurants."
          },
          {
            "name": "Gold Coast",
            "location": "Australia",
            "description": "Premium resorts, scuba diving, and pristine beaches."
          }
        ]
      },
      "Relaxation": {
        "Low": [
          {
            "name": "Goa Beaches",
            "location": "India",
            "description": "Affordable beaches with a laid-back atmosphere and local cuisine."
          },
          {
            "name": "Dominican Republic Beaches",
            "location": "Dominican Republic",
            "description": "Serene beaches and budget-friendly accommodations for relaxation."
          }
        ],
        "Medium": [
          {
            "name": "Greek Islands",
            "location": "Greece",
            "description": "Tranquility with picturesque villages and relaxing beachside walks."
          },
          {
            "name": "Spain Coastal Towns",
            "location": "Spain",
            "description": "A mix of cultural exploration and seaside relaxation."
          }
        ],
        "High": [
          {
            "name": "Maldives Resorts",
            "location": "Maldives",
            "description": "Private beaches, luxury relaxation experiences, and top-tier services."
          },
          {
            "name": "Bora Bora",
            "location": "French Polynesia",
            "description": "Over-water bungalows, gourmet meals, and crystal-clear waters."
          }
        ]
      }
    }
  };

  document.getElementById('generate-btn').addEventListener('click', function() {
      const userName = document.getElementById('user-name').value;
      const companionName = document.getElementById('companion-name').value;
      const location = document.getElementById('location').value;
      const activity = document.getElementById('activity').value;
      const budget = document.getElementById('budget').value;
  
      if (userName && companionName && location && activity && budget) {
          generateStory(userName, companionName, location, activity, budget);
          displayRecommendation(location, activity, budget);
      } else {
          alert('Please fill out all fields.');
      }
  });
  

  function generateStory(userName, companionName, location, activity, budget) {
      const stories = {
          Mountains: {
              Adventure: {
                  Low: [
                      `${userName} and ${companionName} set out on an exhilarating journey to the <strong>Rocky Mountains</strong>. With their limited budget, they camped under the stars and hiked through rugged trails, discovering hidden waterfalls.`,
                      `${userName} and ${companionName} embarked on an adventure to the <strong>Appalachian Mountains</strong>. They spent their days exploring caves and their nights around a campfire, sharing stories of their exciting discoveries.`
                  ],
                  Medium: [
                      `${userName} and ${companionName} traveled to the <strong>Swiss Alps</strong> for a blend of adventure and comfort. They enjoyed moderate hikes with breathtaking views and stayed in cozy mountain lodges.`,
                      `${userName} and ${companionName} explored the <strong>Canadian Rockies</strong>. They balanced thrilling activities like rock climbing with relaxing evenings in charming cabins.`
                  ],
                  High: [
                      `${userName} and ${companionName} embarked on a luxurious adventure in the <strong>Himalayas</strong>. They had guided treks through stunning landscapes and stayed in high-end accommodations with all the amenities.`,
                      `${userName} and ${companionName} experienced the <strong>Andes</strong> in South America. They enjoyed premium tours, including helicopter rides over the mountains and gourmet meals at exclusive lodges.`
                  ]
              },
              Relaxation: {
                  Low: [
                      `${userName} and ${companionName} found tranquility in the <strong>Blue Ridge Mountains</strong>. They stayed in budget-friendly cabins, enjoying peaceful hikes and the serene beauty of nature.`,
                      `${userName} and ${companionName} escaped to the <strong>Appalachian Mountains</strong> for a relaxing retreat. They spent their days lounging by the riverside and their nights in rustic, affordable lodges.`
                  ],
                  Medium: [
                      `${userName} and ${companionName} enjoyed a peaceful vacation in the <strong>Swiss Alps</strong>. They stayed in mid-range hotels, took leisurely walks in picturesque villages, and savored local cuisine.`,
                      `${userName} and ${companionName} found solace in the <strong>Rocky Mountains</strong>. They stayed in comfortable lodges, enjoyed scenic drives, and relaxed in natural hot springs.`
                  ],
                  High: [
                      `${userName} and ${companionName} indulged in the luxury of the <strong>Himalayas</strong>. They stayed in exclusive resorts, enjoyed spa treatments, and had private yoga sessions amidst breathtaking scenery.`,
                      `${userName} and ${companionName} relaxed in the <strong>Alps</strong>, staying in high-end chalets with stunning views. They enjoyed gourmet meals and personalized services.`
                  ]
              }
          },
          Beach: {
              Adventure: {
                  Low: [
                      `${userName} and ${companionName} explored the budget-friendly beaches of <strong>Thailand</strong>. They participated in water sports, island-hopped, and enjoyed the vibrant local culture.`,
                      `${userName} and ${companionName} visited Portugal's coast. They surfed the waves and discovered hidden coves, all while keeping their expenses low.`
                  ],
                  Medium: [
                      `${userName} and ${companionName} experienced the adventurous side of <strong>Bali</strong>. They mixed water activities with cultural experiences, staying in moderately priced accommodations.`,
                      `${userName} and ${companionName} enjoyed the lively beaches of <strong>Mexico</strong>. They balanced thrilling activities like parasailing with relaxing moments on the beach.`
                  ],
                  High: [
                      `${userName} and ${companionName} embarked on a luxurious adventure in the <strong>Maldives</strong>. They enjoyed exclusive water sports, stayed in over-water villas, and dined at underwater restaurants.`,
                      `${userName} and ${companionName} explored Australia's <strong>Gold Coast</strong>. They stayed in high-end resorts, enjoyed premium activities like scuba diving, and relaxed on pristine beaches.`
                  ]
              },
              Relaxation: {
                  Low: [
                      `${userName} and ${companionName} found relaxation on <strong>Goa's</strong> budget-friendly beaches. They enjoyed the laid-back atmosphere, local cuisine, and affordable accommodations.`,
                      `${userName} and ${companionName} unwound on the serene shores of the <strong>Dominican Republic</strong>. They stayed in budget lodges and soaked up the sun on beautiful beaches.`
                  ],
                  Medium: [
                      `${userName} and ${companionName} experienced the tranquility of the <strong>Greek Islands</strong>. They stayed in mid-range hotels, explored charming villages, and lounged on stunning beaches.`,
                      `${userName} and ${companionName} found peace in Spain's coastal towns. They enjoyed a mix of cultural experiences and relaxation by the sea, staying in comfortable accommodations.`
                  ],
                  High: [
                      `${userName} and ${companionName} indulged in luxury beach resorts in the <strong>Maldives</strong>. They enjoyed top-notch relaxation experiences, including private beaches and personalized services.`,
                      `${userName} and ${companionName} relaxed in <strong>Bora Bora</strong>. They stayed in high-end over-water bungalows, enjoyed gourmet meals, and took leisurely swims in crystal-clear waters.`
                  ]
              }
          }
      };
  
      const selectedStory = stories[location][activity][budget];
      const randomIndex = Math.floor(Math.random() * selectedStory.length);
      const story = selectedStory[randomIndex];
  
      displayStory(story);
  }

  function displayStory(story) {
      const storyDiv = document.getElementById('story');
      storyDiv.innerHTML = `<p>${story}</p>`;
      storyDiv.style.display = 'block';
  }
  
  function displayRecommendation(location, activity, budget) {
      const recommendationsDiv = document.getElementById('recommendations');
      const recommendations = destinations[location][activity][budget];
  
      let recommendationHtml = `<h2>Recommended Places</h2><ul>`;
      recommendations.forEach(place => {
          recommendationHtml += `
              <li>
                  <strong>${place.name}</strong><br>
                  <em>${place.location}</em><br>
                  ${place.description}
              </li>
          `;
      });
      recommendationHtml += `</ul>`;
      
      recommendationsDiv.innerHTML = recommendationHtml;
      recommendationsDiv.style.display = 'block';
  }
  