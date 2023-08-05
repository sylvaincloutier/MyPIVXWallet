export const fr_translation = {
    // This document is to be used as a template as all the base code is in English
    // Basic HTML tags are allowed such as <b><i> etc. All data is sanitized https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

    // When updating the template you must also update the en version. If you don't and a new language with a new setting is used, it
    // will NOT translate back after switching back to en

    // How to create a new language:
    //  1) Create a new folder in locale and copy the template, add the locale prefix (en, uwu, etc) to the start of the variable
    //          (var translation -> var en_translation) then edit the template with your new languages words.
    //  2) Go into the i18n.js and find `arrActiveLangs` and add the prefix to that array. ['en'] -> ['en', 'uwu']
    //  3) Go into the i18n.js page and find `translatableLanguages` add your prefix and variable name
    //              var translatableLanguages = {
    //                  "en": en_translation
    //              }
    //        Turns into:
    //              var translatableLanguages = {
    //                  "en": en_translation,
    //                  "uwu": uwu_translation
    //              }
    //  4) Submit a push request to the github

    // NOTE: If a section does NOT need translating, leave it empty.

    // General words
    amount: 'Montant', //Amount
    staking: 'Staking', //Staking
    wallet: 'Portefeuille', //Wallet
    display: 'Afficher', //Display
    activity: 'Activité', //Activity
    yes: 'Oui', //Yes
    no: 'Non', //No

    // Nav Bar
    navDashboard: 'Tableau de bord', //Dashboard
    navStake: 'Stake', //Stake
    navMasternode: 'Masternode', //Masternode
    navGovernance: 'Gouvernance', //Governance
    navSettings: 'Paramètres', //Settings

    // Footer
    footerBuiltWithPivxLabs: 'Construit avec 💜 par PIVX Labs ', //Built with 💜 by PIVX Labs

    // Intro
    loading: 'En cours de chargement', //Loading
    loadingTitle: 'My PIVX Wallet est', //My PIVX Wallet is

    // Onboarding Dashboard
    dashboardTitle: 'Tableau de bord', //Dashboard
    dCardOneTitle: 'Créer un', //Create a
    dCardOneSubTitle: 'Nouveau portefeuille', //New Wallet
    dCardOneDesc: 'Créer un nouveau portefeuille PIVX, offrant les méthodes de sauvegarde et de sécurité les plus sûres.', //Create a new PIVX wallet, offering the most secure backup & security methods.
    dCardOneButton: 'Créer une nouveau portefeuille', //Create A New Wallet

    dCardTwoTitle: 'Créer un nouveau', //Create a new
    dCardTwoSubTitle: 'Portefeuille Vanity', //Vanity Wallet
    dCardTwoDesc: 'Créer un portefeuille avec un préfixe personnalisé, cela peut prendre beaucoup de temps!', //Create a wallet with a custom prefix, this can take a long time!
    dCardTwoButton: 'Créer un portefeuile Vanity', //Create A Vanity Wallet

    dCardThreeTitle: 'Accédez à votre', //Access your
    dCardThreeSubTitle: 'Portefeuille physique', //Hardware Wallet
    dCardThreeDesc: 'Utilisez votre portefeuille Ledger Hardware avec l\'interface familière de MPW', //Use your Ledger Hardware wallet with MPW's familiar interface.
    dCardThreeButton: 'Accéder mon ledger', //Access my Ledger

    dCardFourTitle: 'Aller à', //Go to
    dCardFourSubTitle: 'Mon portefeuille', //My Wallet
    dCardFourDesc: 'Importer un portefeuille PIVX à l\'aide d\'une clé privée, d\'un xpriv ou d\'une Seed Phrase.', //Import a PIVX wallet using a Private Key, xpriv, or Seed Phrase.
    dCardFourButtonI: 'Importation du portefeuille', //Import Wallet
    dCardFourButtonA: 'Accéder à mon portefeuille', //Access My Wallet

    // Seed Phrase Creation
    thisIsYourSeed: 'Il s\'agit de votre phrase seed', //This is your seed phrase:
    writeDownSeed: 'Notez-le quelque part. Vous ne le verrez qu\'une fois!', //Write it down somewhere. You'll only see this <b>once!</b>
    doNotShareWarning: 'Toute personne possédant une copie de ce document peut accéder à l\'ensemble de vos fonds.', //Anyone with a copy of it can access <b>all</b> of your funds.
    doNotShare: 'Ne le partagez PAS avec personne.', //Do NOT share it with anybody.
    digitalStoreNotAdvised: 'Il n\'est PAS conseillé de les stocker sous forme numérique.', //It is <b>NOT</b> advised to store this digitally.
    optionalPassphrase: 'Phrase d\'authentification facultative', //Optional Passphrase
    writtenDown: 'J\'ai écrit ma phrase seed', //I have written down my seed phrase

    // Wallet Dashboard
    gettingStarted: 'Pour commencer', //Getting Started
    secureYourWallet: 'Sécurisez votre portefeuille', //Secure your wallet
    unlockWallet: 'Déverrouiller le portefeuille', //Unlock wallet
    lockWallet: 'Vérouiller le portefeuille', //Lock wallet

    // Encrypt wallet
    encryptWallet: 'Encrypter le portefeuille', //Encrypt wallet
    encryptPasswordFirst: 'Saisir le mot de passe', //Enter Password
    encryptPasswordSecond: 'Saisir à nouveau le mot de passe', //Re-enter Password
    encrypt: 'Encrypter', //Encrypt

    // Wallet Dashboard Sub-menu
    balanceBreakdown: 'Répartition du solde', //Balance Breakdown
    viewOnExplorer: 'Voir sur Explorer', //View on Explorer
    export: 'Exporter', //Export
    refreshAddress: 'Actualiser l\'adresse', //Refresh address
    redeemOrCreateCode: 'Échanger ou créer un code', //Redeem or Create Code

    // Send
    transfer: 'Transférer', //Transfer
    address: 'Adresse', //Address
    receivingAddress: 'Adresse de réception', //Receiving address
    sendAmountCoinsMax: 'MAX', //MAX
    paymentRequestMessage: 'Description (du marchand)', //Description (from the merchant)
    send: 'Envoyer', //Send

    // Export
    privateKey: 'Clé privée', //Private Key
    viewPrivateKey: 'Voir la clé privée?', //View Private Key?
    privateWarning1: 'Assurez-vous que personne ne peut voir votre écran.', //Make sure no one can see your screen.
    privateWarning2: 'Toute personne possédant cette clé peut voler vos fonds.', //Anyone with this key can steal your funds.
    viewKey: 'Voir la clé', //View key

    // PIVX Promos
    // NOTE: for this below line, continue the sentence "PIVX Promos [...]", since 'PIVX Promos' is a brand, it is not translated.
    pivxPromos: '[...] est un système décentralisé de codes cadeaux valant PIV', // [...] is a decentralised system for gift codes worth PIV
    // NOTE: on this line, if possible, leave 'PIVX Promos' untranslated
    redeemInput: 'Saisissez votre code promo PIVX.', //Enter your 'PIVX Promos' code
    createName: 'Nom de la promotion (facultatif)', //Promo Name (Optional)
    createAmount: 'Montant de la promotion', //Promo Amount

    // Stake
    stake: 'Stake', //Stake
    stakeUnstake: 'Unstake', //Unstake
    rewardHistory: 'Historique des récompenses', //Reward History
    loadMore: 'Plus d\'infos', //Load more

    // Masternode
    mnControlYour: 'Contrôler vos', //Control your
    mnSubtext: 'Cet onglet permet de créer et d\'accéder à un ou plusieurs masternodes.', //From this tab you can create and access one or more masternodes

    // Governance
    govSubtext: 'Depuis cet onglet, vous pouvez consulter les propositions et, si vous avez un masternode, faire partie de la DAO et voter !', //From this tab you can check the proposals and, if you have a masternode, be a part of the <b>DAO</b> and vote!
    govMonthlyBudget: 'Budget mensuel', //Monthly Budget
    govAllocBudget: 'Budget alloué', //Allocated Budget
    govNextPayout: 'Prochain versement du Trésor', //Next Treasury Payout
    govTableStatus: 'STATUT', //STATUS
    govTableName: 'NOM', //NAME
    govTablePayment: 'PAIEMENT', //PAYMENT
    govTableVotes: 'VOTES', //VOTES
    govTableVote: 'VOTE', //VOTE
    contestedProposalsDesc: 'Il s\'agit de propositions qui ont reçu un nombre impressionnant de votes négatifs, ce qui en fait probablement du spam ou une proposition très contestable.', //These are proposals that received an overwhelming amount of downvotes, making it likely spam or a highly contestable proposal.

    // Settings
    settingsCurrency: 'Choisir une devise d\'affichage', //Choose a display currency:
    settingsExplorer: 'Choisir un explorateur', //Choose an explorer:
    settingsLanguage: 'Choisir une lanque', //Choose a Language:
    settingsPivxNode: 'Choisir une node PIVX', //Choose a PIVX node:
    settingsAutoSelectNet: 'Sélection automatique des explorateurs et des nœuds', //Auto-select Explorers and Nodes
    settingsAnalytics: 'Choisissez votre niveau de contribution à l\'analyse :', //Choose your analytics contribution level:
    settingsToggleDebug: 'Mode de débogage', //Debug Mode
    settingsToggleTestnet: 'Mode Testnet', //Testnet Mode

    // Transparency Report
    transparencyReport: 'Rapport de transparence', //Transparency Report
    hit: 'Un ping indiquant le chargement d\'une application, aucune donnée unique n\'est envoyée.', //A ping indicating an app load, no unique data is sent.
    time_to_sync: 'Le temps en secondes qu\'il a fallu à MPW pour se synchroniser pour la dernière fois.', //The time in seconds it took for MPW to last synchronise.
    transaction: 'Un ping indiquant un Tx, aucune donnée unique n\'est envoyée, mais peut être déduite de la durée de la chaîne.', //A ping indicating a Tx, no unique data is sent, but may be inferred from on-chain time.

    // Analytics Levels
    analyticDisabled: 'Désactivé', //Disabled
    analyticMinimal: 'Minimal', //Minimal
    analyticBalanced: 'Équilibré', //Balanced

    // Migration System
    MIGRATION_ACCOUNT_FAILURE_TITLE: 'Échec de la récupération du compte', //Failed to recover account
    MIGRATION_ACCOUNT_FAILURE_HTML: 'There was an error recovering your account. <br> Veuillez réimporter votre portefeuille en utilisant la clé suivante :', //There was an error recovering your account. <br> Please reimport your wallet using the following key:

    // Dynamic Elements (Rendered at runtime - TODO in future PR: sort in to above categories for consistency)
    ID: 'ID', //ID
    time: 'Heure', //Time
    description: 'Description', //Description
    activityBlockReward: 'Récompense en bloc', //Block Reward
    activitySentTo: 'Envoyé à', //Sent to
    activitySentToSelf: 'Envoyé à soi-même', //Sent to self
    activityShieldedAddress: 'Adresse protégée', //Shielded address
    activityReceivedShield: 'Reçu d\'une adresse protégée', //Received from Shielded address
    activityReceivedFrom: 'Reçu de', //Received from
    activityDelegatedTo: 'Délégué à', //Delegated to
    activityUndelegated: 'Non délégué', //Undelegated
    activityUnknown: 'Transaction inconnu', //Unknown Tx
    password: 'Mot de passe', //Password
    walletUnlock: 'Déverrouillez votre portefeuille', //Unlock your wallet
    walletPassword: 'Mot de passe du portefeuille', //Wallet password
    walletUnlockCreateMN: 'Débloquez pour créer votre Masternode!', //Unlock to create your Masternode!
    walletUnlockMNStart: 'Débloquez pour démarrer votre Masternode!', //Unlock to start your Masternode!
    walletUnlockProposal: 'Débloquez pour créer une proposition! Débloquez pour démarrer votre Masternode !', //Unlock to create a proposal!Unlock to start your Masternode!
    walletUnlockPromo: 'Déverrouillez pour finaliser votre code promo!', //Unlock to finalise your Promo Code!
    walletUnlockTx: 'Déverrouillez pour envoyer votre transaction!', //Unlock to send your transaction!
    walletUnlockStake: 'Déverrouillez pour Staker votre', //Unlock to stake your
    walletUnlockUnstake: '', //Unlock to unstake your
    changelogTitle: '', //What's New in
    popupSetColdAddr: '', //Set your Cold Staking address
    popupCurrentAddress: '', //Current address:
    popupColdStakeNote: '', //A Cold Address stakes coins on your behalf, it cannot spend coins, so it's even safe to use a stranger's Cold Address!
    popupExample: '', //Example:
    popupWalletLock: '', //Do you want to lock your wallet?
    popupWalletWipe: '', //Do you want to wipe your wallet private data?
    popupWalletLockNote: '', //You will need to enter your password to access your funds
    popupWalletWipeNote: '', //You will lose access to your funds if you haven't backed up your private key or seed phrase
    popupSeedPhraseBad: '', //Unexpected Seed Phrase
    popupSeedPhraseBadNote: '', //The seed phrase is either invalid or was not generated by MPW.<br>Do you still want to proceed?
    popupCreateProposal: '', //Create Proposal
    popupCreateProposalCost: '', //Cost
    popupProposalTitle: '', //Proposal Title
    popupProposalDuration: '', //Duration in cycles
    popupProposalPerCycle: '', //per cycle
    popupHardwareAddrCheck: '', //Please confirm this is the address you see on your
    proposalFinalisationConfirming: '', //Confirming...
    proposalFinalisationRemaining: '', //remaining
    proposalFinalisationExpired: '', //Proposal Expired
    proposalFinalisationReady: '', //Ready to submit
    proposalPassing: '', //PASSING
    proposalFailing: '', //FAILING
    proposalFunded: '', //FUNDED
    proposalNotFunded: '', //NOT FUNDED
    proposalPaymentsRemaining: '', //installment(s) remaining<br>of
    proposalPaymentTotal: '', //total
    proposalNetYes: '', //Net Yes
    popupConfirm: '', //Confirm
    popupClose: '', //Close
    popupCancel: '', //Cancel
    chartPublicAvailable: '', //Public Available
    timeDays: '', //Days
    timeHours: '', //Hours
    timeMinutes: '', //Minutes
    timeSeconds: '', //Seconds
    unhandledException: '', //Unhandled exception.

    // Alerts
    ALERTS: '<-- DO NOT EDIT! All below entries are for Alert Popups',

    INTERNAL_ERROR: '', //Internal error, please try again later
    FAILED_TO_IMPORT: '', //<b>Failed to import!</b> Invalid password
    UNSUPPORTED_CHARACTER: '', //The character '{char}' is unsupported in addresses! (Not Base58 compatible)
    UNSUPPORTED_WEBWORKERS: '', //This browser doesn\'t support Web Workers (multi-threaded JS), unfortunately you cannot generate Vanity wallets!
    INVALID_ADDRESS: '', //<b>Invalid PIVX address!</b><br> {address}
    TESTNET_ENCRYPTION_DISABLED: '', //<b>Testnet Mode is ON!</b><br>Wallet encryption disabled
    PASSWORD_TOO_SMALL: '', //That password is a little short!<br>Use at least <b>{MIN_PASS_LENGTH} characters.</b>
    PASSWORD_DOESNT_MATCH: '', //Your passwords don\'t match!
    NEW_PASSWORD_SUCCESS: '', //<b>You\'re Secured! 🔐</b><br>Nice stuff, Armoured PIVian!
    INCORRECT_PASSWORD: '', //Incorrect password!
    INVALID_AMOUNT: '', //<b>Invalid amount!</b><br>
    TX_SENT: '', //Transaction sent!
    TX_FAILED: '', //Transaction Failed!
    QR_SCANNER_BAD_RECEIVER: '', //is not a valid payment receiver
    VALIDATE_AMOUNT_LOW: '', //<br>Minimum amount is {minimumAmount} {coinTicker}!
    VALIDATE_AMOUNT_DECIMAL: '', //{coinDecimal} decimal limit exceeded
    SUCCESS_STAKING_ADDR: '', //<b>Staking Address set!</b><br>Now go ahead and unstake!
    STAKE_ADDR_SET: '', //<b>Cold Address set!</b><br>Future stakes will use this address.
    STAKE_ADDR_BAD: '', //Invalid Cold Staking address!
    CONFIRM_UNSTAKE_H_WALLET: '', //<b>Confirm your Unstake</b><br>Confirm the TX on your {strHardwareName}
    CONFIRM_TRANSACTION_H_WALLET: '', //<b>Confirm your transaction</b><br>Confirm the TX on your {strHardwareName}
    SUCCESS_STAKING_ADDR_SET: '', //<b>Staking Address set!</b><br>Now go ahead and stake!
    STAKE_NOT_SEND: '', //Here, use the <b>Stake</b> screen, not the Send screen!
    BAD_ADDR_LENGTH: '', //<b>Invalid PIVX address!<b><br>Bad length ({addressLength})
    BAD_ADDR_PREFIX: '', //<b>Invalid PIVX address!<b><br>Bad prefix {address} (Should start with {addressPrefix})
    SENT_NOTHING: '', //You can\'t send \'nothing\'!
    MORE_THEN_8_DECIMALS: '', //8 decimal limit exceeded
    SAVE_WALLET_PLEASE: '', //<b>Save your wallet!</b><br>Dashboard ➜ Secure your wallet
    BACKUP_OR_ENCRYPT_WALLET: '', //Please ENCRYPT and/or BACKUP your keys before leaving, or you may lose them!
    NO_CAMERAS: '', //This device has no camera!
    STAKING_LEDGER_NO_SUPPORT: '', //Ledger is not supported for Cold Staking
    CONNECTION_FAILED: '', //<b>Failed to synchronize!</b> Please try again later.<br>You can attempt re-connect via the Settings.
    MN_NOT_ENABLED: '', //Your masternode is not enabled yet!
    VOTE_SUBMITTED: '', //Vote submitted!
    VOTED_ALREADY: '', //You already voted for this proposal! Please wait 1 hour
    VOTE_SIG_BAD: '', //Failed to verify signature, please check your masternode\'s private key
    MN_CREATED_WAIT_CONFS: '', //<b>Masternode Created!<b><br>Wait 15 confirmations to proceed further
    MN_ACCESS_BEFORE_VOTE: '', //Access a masternode before voting!
    MN_OFFLINE_STARTING: '', //Your masternode is offline, we will try to start it
    MN_STARTED: '', //<b>Masternode started!</b>
    MN_RESTARTED: '', //<b>Masternode restarted!</b>
    MN_STARTED_ONLINE_SOON: '', //<b>Masternode started!</b><br>It\'ll be online soon
    MN_START_FAILED: '', //<b>Masternode started!</b>
    MN_RESTART_FAILED: '', //<b>Masternode restarted!</b>
    MN_DESTROYED: '', //<b>Masternode destroyed!</b><br>Your coins are now spendable.
    MN_STATUS_IS: '', //Your masternode status is
    MN_STATE: '', //Your masternode is in <b>{state}</b> state
    MN_BAD_IP: '', //The IP address is invalid!
    MN_NOT_ENOUGH_COLLAT: '', //You need <b>{amount} more {ticker}</b> to create a Masternode!
    MN_ENOUGH_BUT_NO_COLLAT: '', //You have enough balance for a Masternode, but no valid collateral UTXO of {amount} {ticker}
    MN_COLLAT_NOT_SUITABLE: '', //This is not a suitable UTXO for a Masternode
    MN_CANT_CONNECT: '', //Unable to connect to RPC node!

    SWITCHED_EXPLORERS: '', //<b>Switched explorer!</b><br>Now using {explorerName}
    SWITCHED_NODE: '', //<b>Switched node!</b><br>Now using {node}
    SWITCHED_ANALYTICS: '', //<b>Switched analytics level!</b><br>Now {level}
    SWITCHED_SYNC: '', //<b>Switched sync mode!</b><br>Now using {sync} sync
    UNABLE_SWITCH_TESTNET: '', //<b>Unable to switch Testnet Mode!</b><br>A wallet is already loaded

    WALLET_OFFLINE_AUTOMATIC: '', //<b>Offline Mode is active!</b><br>Please disable Offline Mode for automatic transactions
    WALLET_UNLOCK_IMPORT: '', //Please {unlock} your wallet before sending transactions!
    WALLET_FIREFOX_UNSUPPORTED: '', //<b>Firefox doesn't support this!</b><br>Unfortunately, Firefox does not support hardware wallets
    WALLET_HARDWARE_WALLET: '', //<b>Hardware wallet ready!</b><br>Please keep your {hardwareWallet} plugged in, unlocked, and in the PIVX app
    WALLET_CONFIRM_L: '', //Confirm the import on your Ledger
    WALLET_NO_HARDWARE: '', //<b>No device available</b><br>Couldn't find a hardware wallet; please plug it in and unlock!
    WALLET_HARDWARE_CONNECTION_LOST: '', //<b>Lost connection to {hardwareWallet} </b><br>It seems the {hardwareWalletProductionName} was unplugged mid-operation, oops!
    WALLET_HARDWARE_BUSY: '', //<b>{hardwareWallet} is waiting</b><br>Please unlock your {hardwareWalletProductionName} or finish it's current prompt
    WALLET_HARDWARE_ERROR: '', //<b> {hardwareWallet} </b><br> {error}

    CONFIRM_POPUP_VOTE: '', //Confirm Vote
    CONFIRM_POPUP_VOTE_HTML: '', //Are you sure? It takes 60 minutes to change vote
    CONFIRM_POPUP_TRANSACTION: '', //Confirm your transaction
    CONFIRM_POPUP_MN_P_KEY: '', //Your Masternode Private Key
    CONFIRM_POPUP_MN_P_KEY_HTML: '', // <br> Save this private key and copy it to your VPS config <br>
    CONFIRM_POPUP_VERIFY_ADDR: '', //Verify your address

    MIGRATION_MASTERNODE_FAILURE: '', //Failed to recover your masternode. Please reimport it.
    MIGRATION_ACCOUNT_FAILURE: '', //Failed to recover your account. Please reimport it.
    APP_INSTALLED: '', //App Installed!
};
