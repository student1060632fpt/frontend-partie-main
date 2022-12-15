class Project {
  projectId = '';
  creator_id = '';
  budget = '';
  is_start = '';
  is_end = '';
  voting_id = '';
  freelancers = [];
  constructor(project) {
    if (!project && project[0] && project[1]) return;
    this.projectId = project[0] || this[0];
    const project1 = project[1] || this[1];
console.log({project});
    Object.keys(project1).forEach((key) => {
      this[key] = project1[key];
      this.freelancers = ( !project1['freelancers']) ?[]: Object.entries(project1['freelancers']).map((freelancer,index) => {
        return new Freelancers(freelancer)
      })  
    });
  }
}

export class ProjectDetail {
    creator_id = '';
    budget = '';
    is_start = '';
    is_end = '';
    voting_id = '';
    freelancers = [];
    constructor(project) {
      if (!project) return;

  console.log({project});
      Object.keys(project).forEach((key) => {
        this[key] = project[key];
        this.freelancers = ( !project['freelancers']) ?[]: Object.entries(project['freelancers']).map((freelancer,index) => {
          return new Freelancers(freelancer)
        })  
      });
    }
  }

export class Freelancers{
  name = ""
  creatorConfirm = ""
  creatorEnd = ""
  freelancerGetJob = ""
  freelancerCompleteJob = ""
  constructor(freelancer) {
    if(!freelancer) return;
    this.name = freelancer[0] || this[0]
    const freelancer1 = freelancer[1]||this[1]
    const creatorStatus = freelancer1?.creator || [0,0]
    const freelancerStatus = freelancer1?.freelancer || [0,0]
    this.creatorConfirm = creatorStatus[0]
    this.creatorEnd = creatorStatus[1]
    this.freelancerGetJob = freelancerStatus[0]
    this.freelancerCompleteJob = freelancerStatus[1]
  }
}

export default Project
let projectDetail = {
    "creator_id": "dollcreator.testnet",
    "budget": 12000000000000000000,
    "freelancers": {
        "dollnguyen12345.testnet": {
            "creator": [
                true,
                false
            ],
            "freelancer": [
                true,
                true
            ]
        }
    },
    "is_start": true,
    "is_end": false,
    "voting_id": ""
}
let project = [
  "lMh5dPT_lMh5dPTuMhvDLs_lMh5dPTuMhvDLsjFYsVvd",
  {
      "creator_id": "a2487c1136b5a6c7691ae00745eb711f954d9af6193880568a90c668addbc899",
      "budget": 123000000000000000000,
      "freelancers": {
          "dollnguyen12345.testnet": {
              "creator": [
                  true,
                  false
              ],
              "freelancer": [
                  true,
                  false
              ]
          },
          "a2487c1136b5a6c7691ae00745eb711f954d9af6193880568a90c668addbc899": {
              "creator": [
                  false,
                  false
              ],
              "freelancer": [
                  true,
                  false
              ]
          }
      },
      "is_start": true,
      "is_end": false,
      "voting_id": ""
  }
]


const listProject = [
  {
      "projectId": "lMh5dPT_lMh5dPTuMhvDLs_lMh5dPTuMhvDLsjFYsVvd",
      "creator_id": "a2487c1136b5a6c7691ae00745eb711f954d9af6193880568a90c668addbc899",
      "budget": 123000000000000000000,
      "is_start": true,
      "is_end": false,
      "voting_id": "",
      "freelancers": [
          {
              "name": "dollnguyen12345.testnet",
              "creatorConfirm": true,
              "creatorEnd": false,
              "freelancerGetJob": true,
              "freelancerCompleteJob": false
          },
          {
              "name": "a2487c1136b5a6c7691ae00745eb711f954d9af6193880568a90c668addbc899",
              "creatorConfirm": false,
              "creatorEnd": false,
              "freelancerGetJob": true,
              "freelancerCompleteJob": false
          }
      ]
  },
  {
      "projectId": "lQFxdBn_lQFxdBnNkzjLFz_lQFxdBnNkzjLFz6iF7n28",
      "creator_id": "a2487c1136b5a6c7691ae00745eb711f954d9af6193880568a90c668addbc899",
      "budget": 12000000000000000000,
      "is_start": false,
      "is_end": false,
      "voting_id": "",
      "freelancers": []
  },
  {
      "projectId": "r7kj3Qr_r7kj3QrwY1EduO_r7kj3QrwY1EduOCdwhMeR",
      "creator_id": "thanhdevtest.testnet",
      "budget": 113000000000000000000,
      "is_start": true,
      "is_end": false,
      "voting_id": "",
      "freelancers": [
          {
              "name": "staking-test3.thanhdevtest.testnet",
              "creatorConfirm": true,
              "creatorEnd": false,
              "freelancerGetJob": true,
              "freelancerCompleteJob": false
          },
          {
              "name": "thanhdevtest.testnet",
              "creatorConfirm": false,
              "creatorEnd": false,
              "freelancerGetJob": true,
              "freelancerCompleteJob": false
          }
      ]
  }
]