export default defineAppConfig({
  alpine: {
    title: 'MSR Workspace',
    description: 'MSR Workspace is the output of many hours of figuring things out and explaining them so I can try to remember them next time.',
    image: {
      src: '/MikePreaching.jpg',
      alt: 'Mike speaking in front of a graphical background of dark and light blue.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'alpine' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Other places to check us out.' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'Mike_Rody',
      instagram: 'michaelsrody',

      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs'
      },

      facebook: 'mike.rody',
      youtube: '@MikeRody'
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})