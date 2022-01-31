import CLImages from "../res/CLImages";
import CLStrings from "../res/CLStrings";

export const DummyData = {

    CardNumbers: ['5647', '3411', '2413', '2020'], // Card Number

    SpendedMoney: 345, // Total spend amout

    ModulesList: [ // List of module below card
        {
            Icon: CLImages.Top_UP_Account,
            MainLabel: CLStrings.Top_up_account,
            discription: CLStrings.Top_up_account_dis,
            showswitch: false
        },
        {
            Icon: CLImages.SPEND_LIMIT,
            MainLabel: CLStrings.Weekly_spending_limit,
            discription: CLStrings.Weekly_spending_limit_dis,
            showswitch: true
        },
        {
            Icon: CLImages.FREEZE_CARD,
            MainLabel: CLStrings.Freeze_card,
            discription: CLStrings.Freeze_card_dis,
            showswitch: true
        },
    ],

    DefaultSpendOption: [ //default values for set weekly spend limit
        '5,000',
        '10,000',
        '20,000',
    ]

}