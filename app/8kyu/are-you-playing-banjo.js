export const areYouPlayingBanjo = name =>
    `${name} ${name.toLowerCase().startsWith('r') ? 'plays' : 'does not play'} banjo`
