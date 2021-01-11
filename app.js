$(document).ready(function() {
  var $app = $('#app');

  //create function to create plans
  function createPlan(planObject) {
    var $planBox = $('<div class = "plan-box"></div>');
    var $heading = $('<h2 class = "plan-heading"></h2>');
    var $pricing = $('<h1 class = "pricing"></h1>');
    var $storage = $('<p class = "plan-info"></p>');
    var $maximumUsers = $('<p class = "plan-info"></p>');
    var $transfer = $('<p class = "plan-info"></p>');
    var $learnButton = $('<button id = "learn-button"></button>');

    $planBox.appendTo('#plans');
    $heading
      .text(planObject.plan)
      .appendTo($planBox);
    $("#pricing-checkbox").change(function() {
      if(this.checked){
        $pricing.text(planObject.annualPrice);
      } else{
        $pricing.text(planObject.monthlyPrice);
      }
    })
    $pricing
      .text(planObject.monthlyPrice)
      .appendTo($planBox);
    $storage
      .text(planObject.storage + ' Storage')
      .appendTo($planBox);
    $maximumUsers
      .text(planObject.users + ' Users Allowed')
      .appendTo($planBox);
    $transfer
      .text('Send up to ' + planObject.transferSpeed + ' GB')
      .appendTo($planBox);
    $learnButton
      .text('Learn More')
      .appendTo($planBox);
  }
  //plan objects
  const basicPlan = {
    plan: 'Basic',
    monthlyPrice: '$19.99/Month',
    annualPrice: '$199.99/Year',
    storage: '500 GB',
    users: 2,
    transferSpeed: 3
  }

  const professionalPlan = {
    plan: 'Professional',
    monthlyPrice: '$24.99/Month',
    annualPrice: '$249.99/Year',
    storage: '1 TB',
    users: 5,
    transferSpeed: 10
  }

  const masterPlan = {
    plan: 'Master',
    monthlyPrice: '$39.99/Month',
    annualPrice: '$399.99/Year',
    storage: '2 TB',
    users: 10,
    transferSpeed: 20
  }

  //call upon the 3 plans
  createPlan(basicPlan);
  createPlan(professionalPlan);
  createPlan(masterPlan);
})