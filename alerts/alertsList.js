// This is the file which contains all alerts on Fac-API.
// If the object contains a property < supported: false >. It means the alert is not linked to one function on Fac-API. The alert will not make the complete path.

const alertsList = [
  {
    autoSamplerId: 31,
    lineId: 2,
    newStatus: "OFF",
    date: "DATE",
    alertType: "AutosamplerStatusChanged",
  },
  {
    alertType: "current_task_updated",
    supported: false,
  },
  {
    lineId: "AR",
    taskId: 1,
    flourLeft: "0,45T",
    alertType: "FlourLeftChanged",
  },
  {
    lineId: 3,
    newStatus: 1,
    date: "DATE",
    alertType: "LineStatus",
  },
  {
    autoSamplerId: "AR",
    lineId: 3,
    newStatus: "A0",
    date: "DATE",
    alertType: "NextTaskUpdated",
    supported: false,
  },
  {
    lineId: 0,
    sampleCode: "",
    username: "",
    date: "",
    alertType: "PoolCollectedChanged",
  },
  {
    lineId: 0,
    samplingCode: "",
    username: "",
    date: "",
    alertType: "SampleCollectedChanged",
  },
  {
    lineId: 0,
    taskId: 0,
    date: "",
    alertType: "TaskFinished",
  },
  {
    lineId: 0,
    taskId: 0,
    date: "",
    alertType: "TaskStarted",
  },
  {
    lineId: 5,
    date: "2020",
    newTimer: "Newtimer",
    alertType: "TimerNextSampleChanged",
  },
  {
    lineId: 0,
    date: "",
    newTimer: "",
    alertType: "TimerNextPoolChanged",
  },
];

export default alertsList;
