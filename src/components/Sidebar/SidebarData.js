import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Preface',
    path: '/preface',
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    nolink: true,
  },
  
  {
    title: '1.Overview',
    path: '/overview',
    id: 1,
    // icon: <AiIcons.AiFillHome />,
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    subNav: [
      {
        title: '1.1 Introduction',
        path: '/overview/introduction',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.2 Profile of the State',
        path: '/overview/profile',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.3 Basis and Approach to SFAR',
        path: '/overview/basis',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      
      {
        title: '1.4 Structure of Govt Accounts',
        path: '/overview/structure',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.5 Budgetory Process',
        path: '/overview/budgetprocess',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.6 Snapshots of Finances',
        path: '/overview/snapshot-finances',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.7 Snapshot of Assets and Liabilities',
        path: '/overview/snapshot-assets',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.8 Fiscal Parameters',
        path: '/overview/fiscalparams',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.9 Fiscal Situation',
        path: '/overview/fisc-situation',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '1.10 Impact of Certain Transactions',
        path: '/overview/impact',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: '2. Finances of the state',
    path: '/finances',
    id: 1,
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    subNav: [
      {
        title: '2.1 Introduction',
        path: '/finances/introduction',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.2 Major Changes',
        path: '/finances/major-sources',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.3 Sources and Application of funds',
        path: '/finances/sources-application',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.4 Resources',
        path: '/finances/resources',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.5 Application',
        path: '/finances/application',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.6 Public Account',
        path: '/finances/publicaccount',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.7 Debt management',
        path: '/finances/debtmanagement',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.8 Debt Sustainablity analysis',
        path: '/finances/dsa',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '2.9 Conclusion and Recommendations',
        path: '/finances/conclusion',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: '3 Budgetary Management',
    path: '/budget',
    id: 1,
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    subNav: [
      {
        title: '3.1 Introduction',
        path: '/budget/introduction',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.2 Budget Process',
        path: '/budget/budget-process',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.3 Gender Budgeting in Karnataka',
        path: '/budget/gender-budget',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.4 Child Budget',
        path: '/budget/child-budget',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      // {
      //   title: '3.5 Major policy pronouncements in the budget and their actual funding for ensuring implementation',
      //   path: '/budget/policy',
      //   id: 2,
      //   icon: <FaIcons.FaAngleRight />,
      //   cName: 'sub-nav'
      // },
      {
        title: '3.5 Appropriation Accounts',
        path: '/budget/Appropacc',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.6 Audit of Appropriation',
        path: '/budget/audit',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.7 Outcome of review of selected Grants',
        path: '/budget/outcome',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.8 Conclusion',
        path: '/budget/conclusion',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '3.9 Recommendations',
        path: '/budget/recommendations',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: '4 Quality of Accounts and Financial Reporting Pratices',
    path: '/quality',
    id: 1,
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    subNav: [
      
      {
        title: '4.1 Loans of State Government not being credited',
        path: '/quality/funds',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      
      {
        title: '4.2 Non remittance of interest earned',
        path: '/quality/NonRemittance',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.3 Non-discharge of liability in respect of interest ',
        path: '/quality/Non-discharge',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.4 Funds transferred directly',
        path: '/quality/fund-transfer',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
     
      {
        title: '4.5 Delay in submission of Utilisation Certificates',
        path: '/quality/delay',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.6 Abstract Contingent Bills',
        path: '/quality/contingent-bill',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.7 Personal Deposit Accounts',
        path: '/quality/PDA',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      
      {
        title: '4.8 Indiscriminate use of Minor Head - 800',
        path: '/quality/Indiscriminate-use',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.9 OB under suspense and DDR heads ',
        path: '/quality/OB',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      
      {
        title: '4.10 Non-reconciliation of Departmental figures', 
        path: '/quality/non-reconciliation',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.11 Reconciliation of cash balance',
        path: '/quality/cash',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.12 Impact of certain transactions ',
        path: '/quality/impact',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.13 Compliance with Accounting Standards',
        path: '/quality/compliance',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.14 Submission of accounts and placing of SAR  ',
        path: '/quality/observation',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.15 Conclusion',
        path: '/quality/conclusion',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '4.16 Recommendations',
        path: '/quality/recommendations',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Chapter 5  - State Public Sector Undertakings',
    path: '/State',
    id: 1,
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    subNav: [
    
      {
        title: '5.1 Definition of Government Companies',
        path: '/State/Definition',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
     
      {
        title: '5.2 Mandate of Audit',
        path: '/State/Mandate',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '5.3 SPSEs and their contribution to the GSDP of the State',
        path: '/State/Spse',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '5.4 Investment in SPSEs and Budgetary support',
        path: '/State/Investment',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
 
      {
        title: '5.5 Returns from SPSEs',
        path: '/State/Returns',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '5.6 Debt Servicing',
        path: '/State/Debt',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '5.7 Performance of listed SPSEs vis-a-vis private companies',
        path: '/State/Performance',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '5.8 Operating efficiency',
        path: '/State/operating-efficiency',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },

      {
        title: '5.9 SPSEs incurring losses',
        path: '/State/Loss',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '5.10 Audit of SPSEs',
        path: '/State/Auditt',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      
      {
        title: '5.11  Appointment of statutory auditors of SPSEs by C&AG',
        path: '/State/Appointment',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '5.12 Submission of accounts by SPSEs',
        path: '/State/Submissions',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: "5.13 C&AG's oversight  ",
        path: '/State/Cag',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '5.14  Result of C&AG’s oversight role',
        path: '/State/Result',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '5.15 Management letters',
        path: '/State/Management',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '5.16 Conclusion',
        path: '/State/Conclusions',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: '5.17 Recommendations',
        path: '/State/Recommend',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Appendices',
    path: '#',
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    subNav: [
      {
        title: 'Appendix 1',
        path: '/appendices/appendix-1',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: 'Appendix 2',
        path: '/appendices/appendix-2',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: 'Appendix 3',
        path: '/appendices/appendix-3',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: 'Appendix 4',
        path: '/appendices/appendix-4',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      },
      {
        title: 'Appendix 5',
        path: '/appendices/appendix-5',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Glossary',
    path: '#',
    iconClosed: <FaIcons.FaPlusSquare size="12px"/>,
    iconOpened: <FaIcons.FaRegMinusSquare size="12px" />,
    subNav: [
      {
        title: 'Glossary',
        path: '/glossary/glossary',
        id: 2,
        icon: <FaIcons.FaAngleRight />,
        cName: 'sub-nav'
      } ]
  }

];
