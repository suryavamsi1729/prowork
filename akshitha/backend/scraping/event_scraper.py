import requests
from bs4 import BeautifulSoup

def scrape_events():
    url = "https://www.eventbrite.com.au/d/australia--sydney/events/"
    headers = {
        "User-Agent": "Mozilla/5.0"
    }

    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")
    events = []

    for card in soup.select("div.event-card"):
        try:
            # Event title
            title_tag = card.select_one("h3.Typography_body-lg__487rx")
            title = title_tag.get_text(strip=True) if title_tag else "No Title"

            # Event date (first bold paragraph)
            date_tag = card.select("p.Typography_body-md-bold__487rx")
            date = date_tag[0].get_text(strip=True) if date_tag else "No Date"

            # Event link
            link_tag = card.select_one("a.event-card-link")
            link = link_tag["href"] if link_tag else "No Link"

            # Event image
            image_tag = card.select_one("img.event-card-image")
            image = image_tag["src"] if image_tag else "No Image"

            # Append structured event
            events.append({
                "name": title,
                "date": date,
                "link": link,
                "image": image
            })

        except Exception as e:
            print(f"Error parsing card: {e}")

    print(f"Scraped {len(events)} events.")
    return events
