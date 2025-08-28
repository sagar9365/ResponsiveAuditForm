$(document).ready(function(){

  // DH Names
  var dhNames = [
    "BLR-BTM-2","BLR-BTM LAYOUT NEW","BLR-RICHMOND TOWN","BLR-JP Nagar",
    "BLR-BANASHANKARI","BLR-Mathikere","BLR-Kalyan Nagar Network","BLR-Chickpet New",
    "BLR-SHIVAJI NAGAR","BLR-Cholayakanakalli","BLR-Jakkur New","BLR-Jakkur Network",
    "BLR-HEBBAL NEW","BLR-Nikoo Home New","BLR-TC Palaya","BLR-Devanahalli",
    "BLR-Yelahanka Network","BLR-Nehru Nagar","BLR-GUNJUR","BLR-HSR-3",
    "BLR-Narayana reddy Layout","BLR-Kannika Nagar","BLR-GUNJUR Network","BLR-Mico layout network-2",
    "BLR-Bannerghatta Network 2","BLR-BANNERGHATTA","BLR-Kambhipura","BLR-JP NAGAR New",
    "BLR-KALYAN NAGAR NEW","BLR-Challakere","BLR-Koramangala Network","BLR-Hennur New",
    "BLR-Dasarahalli","BLR-SHIVAJI NAGAR Network","BLR-Margosa road","BLR-Banjara Layout",
    "BLR-Ramamurthy Nagar Network","BLR-BASAVANAPURA NETWORK 2","BLR-Bagalur","BLR-RWF Yelahanka",
    "Sanjaynagar","BLR-BHADRAPPA LAYOUT NETWORK","BLR-Bhadrapppa Layout","BLR-HBR Layout",
    "BLR-Dooravani Nagar","BLR-Nagavara","BLR-Narayanapura","BLR-YELAHANKA",
    "BLR-Kasturinagar","BLR-Vidyaranyapura","BLR-Kogilu Road","BLR-Narayanapura Network",
    "BLR-INDIRANAGAR NEW","BLR-Malleshwaram new","BLR-RAMAMURTHY NAGAR NEW"
  ];

  $("#dhName").autocomplete({
    source: dhNames,
    minLength: 1
  });

  // Calculations
  function calcDiff(){
    let lpn = +$("#lpnQty").val()||0;
    let phy = +$("#phyQty").val()||0;
    let diff = Math.abs(lpn - phy);
    $("#diffQty").val(diff);
    let remark = lpn>phy ? "Short" : lpn<phy ? "Excess" : "Equal";
    $("#remarks").val(remark);
    calcValue();
  }

  function calcValue(){
    let diff = +$("#diffQty").val()||0;
    let price = +$("#price").val()||0;
    $("#totalValue").val(diff*price);
  }

  $("#lpnQty, #phyQty").on("input", calcDiff);
  $("#price").on("input", calcValue);

});

// Dark mode
function toggleDark(){
  document.body.classList.toggle("dark");
}

// Scanner
let scanner;
let currentField;

function openScanner(fieldId){
  currentField = fieldId;
  if(scanner) scanner.stop().then(()=>scanner.clear());

  $("#scannerModal").css("display","flex");

  scanner = new Html5Qrcode("reader");
  scanner.start(
    { facingMode:{ exact: "environment" } },
    { fps:20, qrbox:300, aspectRatio:1.0 },
    (decodedText)=>{
      $("#"+currentField).val(decodedText);
      closeScanner();
    },
    (err)=>{}
  ).catch(err=>{ alert("Camera error: "+err); });
}

function closeScanner(){
  if(scanner){
    scanner.stop().then(()=>scanner.clear()).catch(()=>{});
    scanner=null;
  }
  $("#scannerModal").hide();
}

// Click outside modal
$("#scannerModal").on("click", function(e){
  if(e.target===this) closeScanner();
});








// $(document).ready(function(){

//   // DH Names
//   var dhNames = [
//     "BLR-BTM-2","BLR-BTM LAYOUT NEW","BLR-RICHMOND TOWN","BLR-JP Nagar",
//     "BLR-BANASHANKARI","BLR-Mathikere","BLR-Kalyan Nagar Network","BLR-Chickpet New",
//     "BLR-SHIVAJI NAGAR","BLR-Cholayakanakalli","BLR-Jakkur New","BLR-Jakkur Network",
//     "BLR-HEBBAL NEW","BLR-Nikoo Home New","BLR-TC Palaya","BLR-Devanahalli",
//     "BLR-Yelahanka Network","BLR-Nehru Nagar","BLR-GUNJUR","BLR-HSR-3",
//     "BLR-Narayana reddy Layout","BLR-Kannika Nagar","BLR-GUNJUR Network","BLR-Mico layout network-2",
//     "BLR-Bannerghatta Network 2","BLR-BANNERGHATTA","BLR-Kambhipura","BLR-JP NAGAR New",
//     "BLR-KALYAN NAGAR NEW","BLR-Challakere","BLR-Koramangala Network","BLR-Hennur New",
//     "BLR-Dasarahalli","BLR-SHIVAJI NAGAR Network","BLR-Margosa road","BLR-Banjara Layout",
//     "BLR-Ramamurthy Nagar Network","BLR-BASAVANAPURA NETWORK 2","BLR-Bagalur","BLR-RWF Yelahanka",
//     "Sanjaynagar","BLR-BHADRAPPA LAYOUT NETWORK","BLR-Bhadrapppa Layout","BLR-HBR Layout",
//     "BLR-Dooravani Nagar","BLR-Nagavara","BLR-Narayanapura","BLR-YELAHANKA",
//     "BLR-Kasturinagar","BLR-Vidyaranyapura","BLR-Kogilu Road","BLR-Narayanapura Network",
//     "BLR-INDIRANAGAR NEW","BLR-Malleshwaram new","BLR-RAMAMURTHY NAGAR NEW"
//   ];

//   $("#dhName").autocomplete({
//     source: dhNames,
//     minLength: 1
//   });

//   // Calculations
//   function calcDiff(){
//     let lpn = +$("#lpnQty").val()||0;
//     let phy = +$("#phyQty").val()||0;
//     let diff = Math.abs(lpn - phy);
//     $("#diffQty").val(diff);
//     let remark = lpn>phy ? "Short" : lpn<phy ? "Excess" : "Equal";
//     $("#remarks").val(remark);
//     calcValue();
//   }

//   function calcValue(){
//     let diff = +$("#diffQty").val()||0;
//     let price = +$("#price").val()||0;
//     $("#totalValue").val(diff*price);
//   }

//   $("#lpnQty, #phyQty").on("input", calcDiff);
//   $("#price").on("input", calcValue);

// });

// // Dark mode
// function toggleDark(){
//   document.body.classList.toggle("dark");
// }

// // Scanner
// let scanner;
// let currentField;

// function openScanner(fieldId){
//   currentField = fieldId;

//   if(scanner) scanner.stop().then(()=>scanner.clear()).catch(()=>{});

//   $("#scannerModal").css("display","flex");

//   Html5Qrcode.getCameras().then(cameras => {
//     if(cameras && cameras.length){
//       // Try to find rear camera
//       let rearCamera = cameras.find(cam => /back|rear|environment/i.test(cam.label));
//       let cameraId = rearCamera ? rearCamera.id : cameras[0].id;

//       scanner = new Html5Qrcode("reader");
//       scanner.start(
//         { deviceId: { exact: cameraId } },
//         { fps:20, qrbox:300 },
//         (decodedText)=>{
//           $("#"+currentField).val(decodedText);
//           closeScanner();
//         },
//         (err)=>{}
//       ).catch(err => { alert("Camera start error: "+err); });
//     } else {
//       alert("No camera found on this device.");
//       $("#scannerModal").hide();
//     }
//   }).catch(err => {
//     alert("Camera access error: "+err);
//     $("#scannerModal").hide();
//   });
// }


// function closeScanner(){
//   if(scanner){
//     scanner.stop().then(()=>scanner.clear()).catch(()=>{});
//     scanner=null;
//   }
//   $("#scannerModal").hide();
// }

// // Click outside modal
// $("#scannerModal").on("click", function(e){
//   if(e.target===this) closeScanner();
// });
