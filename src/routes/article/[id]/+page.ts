import type { PageLoad } from './$types'

export const load: PageLoad = ({ params }) => {
  return {
    title: `iPadOS 16 and macOS Ventura arrive on October 24th (${params.id})`,
    source: 'Engadget',
    author: 'Devindra Hardawar',
    publishedAt: '2022-10-18T16:22:57Z',
    urlToSource:
      'https://www.engadget.com/ipad-os-16-macos-ventura-october-24th-162257225.html',
    urlToImage:
      'https://s.yimg.com/os/creatr-uploaded-images/2022-10/4d5df170-4f00-11ed-a7aa-b9f7641311d6',
    content:
      "You'll finally be able to get your hands on iPadOS 16 next Monday, October 24th, Apple announced this morning. The new OS includes support for Apple's Stage Manager multi-tasking feature, which should make it easier to move between multiple apps on your iPad. That feature is also headed to macOS Ventura, which launches on the same day. iPadOS 16 is landing alongside Apple's new iPad Pro, equipped with an M2 chip and Wi-Fi 6E, and will also later arrive on the revamped (and more expensive) standard iPad. You'll need a fifth-gen iPad or iPad Mini, any iPad Pro, or a third-gen iPad Air to install the new OS.\nIn our preview of iPadOS 16, we found that Apple is doing a better job of marrying it's excellent hardware with better software. It's no wonder the new iPad also has a redesigned Magic Keyboard Folio—iPad OS 16 will make Apple's tablet a far better laptop replacement for some users. As for macOS Ventura, it's a more significant update than last year's OS, though Stage Manager will likely be a controversial feature for some users. Personally, I found it better than moving between icons on the macOS dock, and I appreciated that it was easy to turn Stage Manager on and off as necessary.",
    relatedNews: [
      {
        id: '1',
        title:
          "Jeff Bezos: Blue Origin's goal to 'move all polluting industries off Earth",
        description:
          'Bezos was responding to critics who say he should invest to solve problems on Earth.',
        urlToImage:
          'https://nypost.com/wp-content/uploads/sites/2/2022/10/bezos-blue-origin-pollution-mitigation-goals-comp-2.jpg?quality=75&strip=all&w=1024',
        publishedAt: '2022-10-20T00:05:00Z',
      },
      {
        id: '2',
        title:
          "Alef Launches The Alef Flying Car, First and Only Drivable Flying Car with Vertical Takeoff and Landing Fitting Today's Road Infrastructure",
        description:
          'Alef Aeronautics, an advanced technology company creating alternative transportation solutions for surging traffic trends, today introduces the Alef "Model A...',
        urlToImage:
          'https://s.yimg.com/uu/api/res/1.2/CHX1uv7aqI26RioUiMjaFA--~B/aD0yMjU7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/prnewswire.com/a2775803eec32c5b556faace952c0f91',
        publishedAt: '2022-10-19T22:38:37Z',
      },
      {
        id: '3',
        title:
          'UK watchdog gives first report into how video sharing sites are tackling online harms',
        description:
          'Ofcom has published a report on its first year regulating video-sharing platforms -- including TikTok, Snapchat, Twitch, Vimeo and OnlyFans -- following the introduction of rules aimed at protecting minors and other users from harmful UGC.',
        urlToImage:
          'https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-1188910020.jpg',
        publishedAt: '2022-10-20T00:02:06Z',
      },
      {
        id: '1',
        title:
          "Jeff Bezos: Blue Origin's goal to 'move all polluting industries off Earth",
        description:
          'Bezos was responding to critics who say he should invest to solve problems on Earth.',
        urlToImage:
          'https://nypost.com/wp-content/uploads/sites/2/2022/10/bezos-blue-origin-pollution-mitigation-goals-comp-2.jpg?quality=75&strip=all&w=1024',
        publishedAt: '2022-10-20T00:05:00Z',
      },
      {
        id: '2',
        title:
          "Alef Launches The Alef Flying Car, First and Only Drivable Flying Car with Vertical Takeoff and Landing Fitting Today's Road Infrastructure",
        description:
          'Alef Aeronautics, an advanced technology company creating alternative transportation solutions for surging traffic trends, today introduces the Alef "Model A...',
        urlToImage:
          'https://s.yimg.com/uu/api/res/1.2/CHX1uv7aqI26RioUiMjaFA--~B/aD0yMjU7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/prnewswire.com/a2775803eec32c5b556faace952c0f91',
        publishedAt: '2022-10-19T22:38:37Z',
      },
      {
        id: '3',
        title:
          'UK watchdog gives first report into how video sharing sites are tackling online harms',
        description:
          'Ofcom has published a report on its first year regulating video-sharing platforms -- including TikTok, Snapchat, Twitch, Vimeo and OnlyFans -- following the introduction of rules aimed at protecting minors and other users from harmful UGC.',
        urlToImage:
          'https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-1188910020.jpg',
        publishedAt: '2022-10-20T00:02:06Z',
      },
      {
        id: '1',
        title:
          "Jeff Bezos: Blue Origin's goal to 'move all polluting industries off Earth",
        description:
          'Bezos was responding to critics who say he should invest to solve problems on Earth.',
        urlToImage:
          'https://nypost.com/wp-content/uploads/sites/2/2022/10/bezos-blue-origin-pollution-mitigation-goals-comp-2.jpg?quality=75&strip=all&w=1024',
        publishedAt: '2022-10-20T00:05:00Z',
      },
      {
        id: '2',
        title:
          "Alef Launches The Alef Flying Car, First and Only Drivable Flying Car with Vertical Takeoff and Landing Fitting Today's Road Infrastructure",
        description:
          'Alef Aeronautics, an advanced technology company creating alternative transportation solutions for surging traffic trends, today introduces the Alef "Model A...',
        urlToImage:
          'https://s.yimg.com/uu/api/res/1.2/CHX1uv7aqI26RioUiMjaFA--~B/aD0yMjU7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/prnewswire.com/a2775803eec32c5b556faace952c0f91',
        publishedAt: '2022-10-19T22:38:37Z',
      },
      {
        id: '3',
        title:
          'UK watchdog gives first report into how video sharing sites are tackling online harms',
        description:
          'Ofcom has published a report on its first year regulating video-sharing platforms -- including TikTok, Snapchat, Twitch, Vimeo and OnlyFans -- following the introduction of rules aimed at protecting minors and other users from harmful UGC.',
        urlToImage:
          'https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-1188910020.jpg',
        publishedAt: '2022-10-20T00:02:06Z',
      },
      {
        id: '1',
        title:
          "Jeff Bezos: Blue Origin's goal to 'move all polluting industries off Earth",
        description:
          'Bezos was responding to critics who say he should invest to solve problems on Earth.',
        urlToImage:
          'https://nypost.com/wp-content/uploads/sites/2/2022/10/bezos-blue-origin-pollution-mitigation-goals-comp-2.jpg?quality=75&strip=all&w=1024',
        publishedAt: '2022-10-20T00:05:00Z',
      },
      {
        id: '2',
        title:
          "Alef Launches The Alef Flying Car, First and Only Drivable Flying Car with Vertical Takeoff and Landing Fitting Today's Road Infrastructure",
        description:
          'Alef Aeronautics, an advanced technology company creating alternative transportation solutions for surging traffic trends, today introduces the Alef "Model A...',
        urlToImage:
          'https://s.yimg.com/uu/api/res/1.2/CHX1uv7aqI26RioUiMjaFA--~B/aD0yMjU7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/prnewswire.com/a2775803eec32c5b556faace952c0f91',
        publishedAt: '2022-10-19T22:38:37Z',
      },
      {
        id: '3',
        title:
          'UK watchdog gives first report into how video sharing sites are tackling online harms',
        description:
          'Ofcom has published a report on its first year regulating video-sharing platforms -- including TikTok, Snapchat, Twitch, Vimeo and OnlyFans -- following the introduction of rules aimed at protecting minors and other users from harmful UGC.',
        urlToImage:
          'https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-1188910020.jpg',
        publishedAt: '2022-10-20T00:02:06Z',
      },
      {
        id: '1',
        title:
          "Jeff Bezos: Blue Origin's goal to 'move all polluting industries off Earth",
        description:
          'Bezos was responding to critics who say he should invest to solve problems on Earth.',
        urlToImage:
          'https://nypost.com/wp-content/uploads/sites/2/2022/10/bezos-blue-origin-pollution-mitigation-goals-comp-2.jpg?quality=75&strip=all&w=1024',
        publishedAt: '2022-10-20T00:05:00Z',
      },
      {
        id: '2',
        title:
          "Alef Launches The Alef Flying Car, First and Only Drivable Flying Car with Vertical Takeoff and Landing Fitting Today's Road Infrastructure",
        description:
          'Alef Aeronautics, an advanced technology company creating alternative transportation solutions for surging traffic trends, today introduces the Alef "Model A...',
        urlToImage:
          'https://s.yimg.com/uu/api/res/1.2/CHX1uv7aqI26RioUiMjaFA--~B/aD0yMjU7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/prnewswire.com/a2775803eec32c5b556faace952c0f91',
        publishedAt: '2022-10-19T22:38:37Z',
      },
      {
        id: '3',
        title:
          'UK watchdog gives first report into how video sharing sites are tackling online harms',
        description:
          'Ofcom has published a report on its first year regulating video-sharing platforms -- including TikTok, Snapchat, Twitch, Vimeo and OnlyFans -- following the introduction of rules aimed at protecting minors and other users from harmful UGC.',
        urlToImage:
          'https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-1188910020.jpg',
        publishedAt: '2022-10-20T00:02:06Z',
      },
    ],
  }
}
