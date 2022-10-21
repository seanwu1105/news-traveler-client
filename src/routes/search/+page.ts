import type { PageLoad } from './$types'

export const load: PageLoad = () => ({
  results: [
    {
      id: '1',
      title:
        "Jeff Bezos: Blue Origin's goal to 'move all polluting industries off Earth",
      description:
        'Bezos was responding to critics who say he should invest to solve problems on Earth.',
      urlToImage:
        'https://nypost.com/wp-content/uploads/sites/2/2022/10/bezos-blue-origin-pollution-mitigation-goals-comp-2.jpg?quality=75&strip=all&w=1024',
      publishedAt: '2022-10-20T00:05:00Z',
      sentimentKind: 'negative',
      sentimentScore: 0.923,
    } as const,
    {
      id: '2',
      title:
        "Alef Launches The Alef Flying Car, First and Only Drivable Flying Car with Vertical Takeoff and Landing Fitting Today's Road Infrastructure",
      description:
        'Alef Aeronautics, an advanced technology company creating alternative transportation solutions for surging traffic trends, today introduces the Alef "Model A...',
      urlToImage:
        'https://s.yimg.com/uu/api/res/1.2/CHX1uv7aqI26RioUiMjaFA--~B/aD0yMjU7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/prnewswire.com/a2775803eec32c5b556faace952c0f91',
      publishedAt: '2022-10-19T22:38:37Z',
      sentimentKind: 'positive',
      sentimentScore: 0.864,
    } as const,
    {
      id: '3',
      title:
        'UK watchdog gives first report into how video sharing sites are tackling online harms',
      description:
        'Ofcom has published a report on its first year regulating video-sharing platforms -- including TikTok, Snapchat, Twitch, Vimeo and OnlyFans -- following the introduction of rules aimed at protecting minors and other users from harmful UGC.',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-1188910020.jpg',
      publishedAt: '2022-10-20T00:02:06Z',
      sentimentKind: 'neutral',
      sentimentScore: 0.429,
    } as const,
    {
      id: '1',
      title:
        "Jeff Bezos: Blue Origin's goal to 'move all polluting industries off Earth",
      description:
        'Bezos was responding to critics who say he should invest to solve problems on Earth.',
      urlToImage:
        'https://nypost.com/wp-content/uploads/sites/2/2022/10/bezos-blue-origin-pollution-mitigation-goals-comp-2.jpg?quality=75&strip=all&w=1024',
      publishedAt: '2022-10-20T00:05:00Z',
      sentimentKind: 'negative',
      sentimentScore: 0.923,
    } as const,
    {
      id: '2',
      title:
        "Alef Launches The Alef Flying Car, First and Only Drivable Flying Car with Vertical Takeoff and Landing Fitting Today's Road Infrastructure",
      description:
        'Alef Aeronautics, an advanced technology company creating alternative transportation solutions for surging traffic trends, today introduces the Alef "Model A...',
      urlToImage:
        'https://s.yimg.com/uu/api/res/1.2/CHX1uv7aqI26RioUiMjaFA--~B/aD0yMjU7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/prnewswire.com/a2775803eec32c5b556faace952c0f91',
      publishedAt: '2022-10-19T22:38:37Z',
      sentimentKind: 'positive',
      sentimentScore: 0.864,
    } as const,
    {
      id: '3',
      title:
        'UK watchdog gives first report into how video sharing sites are tackling online harms',
      description:
        'Ofcom has published a report on its first year regulating video-sharing platforms -- including TikTok, Snapchat, Twitch, Vimeo and OnlyFans -- following the introduction of rules aimed at protecting minors and other users from harmful UGC.',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-1188910020.jpg',
      publishedAt: '2022-10-20T00:02:06Z',
      sentimentKind: 'neutral',
      sentimentScore: 0.429,
    } as const,
  ],
})
