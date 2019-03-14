import React from "react";

function OLD() {
  return (
    <div id="iframe-calculator" className="a-section cBoxInner mb">
      <div id="firstHorizontalSection" className="a-section fl">
        <div className="a-section fl">
          <dl className="labels">
            <dt>
            </dt><dt>
              <span className="black">
                Revenue
                </span>
            </dt>
            <dd>
              <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentItemPrice&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                  <span className="black tooltip revenue">
                    Item Price
                    </span>
                  <i className="a-icon a-icon-popover" /></a>
              </span>
              <div className="a-popover-preload" id="a-popover-preloadContentItemPrice">
                <div>
                  <span className="popoverContent">
                    Price charged to the customer. Amazon adds the item price and shipping when assessing competitiveness across sellers.
                    </span>
                </div>
              </div>
            </dd>
            <dd>
              <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentShipping&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                  <span className="black tooltip revenue">
                    Shipping
                    </span>
                  <i className="a-icon a-icon-popover" /></a>
              </span>
              <div className="a-popover-preload" id="a-popover-preloadContentShipping">
                <div>
                  <span className="popoverContent">
                    Price charged to the customer for shipping. For seller-fulfilled orders, the seller collects this amount as revenue. For FBA orders, since shipping is already included, this amount is zero and doesn't affect FBA fulfillment fees.
                    </span>
                </div>
              </div>
            </dd>
            <dd>
              <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentTotalRevenue&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                  <span className="gray bold tooltip">
                    Total Revenue
                    </span>
                  <i className="a-icon a-icon-popover" /></a>
              </span>
              <div className="a-popover-preload" id="a-popover-preloadContentTotalRevenue">
                <div>
                  <span className="popoverContent">
                    This is the sum of Item Price and Delivery.
                    </span>
                </div>
              </div>
            </dd>
            <dt>
              <div className="a-section left-align">
                <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentSellingFees&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                  <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                    <span className="black tooltip">
                      Selling on Amazon fees
                      </span>
                    <i className="a-icon a-icon-popover" /></a>
                </span>
                <div className="a-popover-preload" id="a-popover-preloadContentSellingFees">
                  <div>
                    <span className="popoverContent">
                      To sell on the Amazon marketplace, you pay Referral Fees and Closing Fees.
                      </span>
                  </div>
                </div>
              </div>
            </dt>
            <dt>
              <div className="a-section left-align">
                <span className="black">
                  Fulfillment Cost
                  </span>
              </div>
            </dt>
            <dd>
              <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentFulfillCost&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                  <span className="black tooltip">
                    Cost of Seller Fulfillment
                    </span>
                  <i className="a-icon a-icon-popover" /></a>
              </span>
              <div className="a-popover-preload" id="a-popover-preloadContentFulfillCost">
                <div>
                  <span className="popoverContent">
                    Total cost per unit for you to fulfill a customer’s order.
                    </span>
                </div>
              </div>
            </dd>
            <dd>
              <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentAmazonFulfillmetFees&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                  <span className="black tooltip">
                    Fulfillment by Amazon Fees
                    </span>
                  <i className="a-icon a-icon-popover" /></a>
              </span>
              <div className="a-popover-preload" id="a-popover-preloadContentAmazonFulfillmetFees">
                <div>
                  <span className="popoverContent">
                    Fulfillment by Amazon fees are calculated based on the dimensions and weight of the item.
                    </span>
                </div>
              </div>
            </dd>
            <dd>
              <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentInboundShip&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                  <span className="black tooltip">
                    Ship to Amazon
                    </span>
                  <i className="a-icon a-icon-popover" /></a>
              </span>
              <div className="a-popover-preload" id="a-popover-preloadContentInboundShip">
                <div>
                  <span className="popoverContent">
                    Cost of shipping the item to an Amazon fulfillment center. You may use an average to account for zone differences.
                    </span>
                </div>
              </div>
            </dd>
            <dd>
              <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentTotalSellingCosts&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                  <span className="gray bold tooltip">
                    Total Fulfillment Cost
                    </span>
                  <i className="a-icon a-icon-popover" /></a>
              </span>
              <div className="a-popover-preload" id="a-popover-preloadContentTotalSellingCosts">
                <div>
                  <span className="popoverContent">
                    This is the sum of fulfillment fees and the cost to ship to Amazon.
                    </span>
                </div>
              </div>
            </dd>
          </dl>
        </div>
        <div className="a-section fl fees mfn-fees">
          <dl className="inputs">
            <dt>
              <span className="black bold">
                Your Fulfillment
                </span>
            </dt>
            <dt>
            </dt><dd>
              <input type="text" id="mfn-pricing" className="a-input-text revenue pricing" />
            </dd>
            <dd>
              <input type="text" id="mfn-shipping" className="a-input-text revenue shipping" />
            </dd>
            <dd>
              <input type="text" id="mfn-total-revenue" tabIndex={-1} className="a-input-text a-form-inactive readonly total-revenue" disabled="disabled" />
            </dd>
            <dd>
              <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentMfnSellingFees&quot;,&quot;activate&quot;:&quot;onclick&quot;,&quot;position&quot;:&quot;triggerBottom&quot;}">
                <a id="mfn-selling-fee-popover" href="javascript:void(0)" className="a-popover-trigger a-declarative">
                  <div id="mfn-selling-fees" className="hiddenBox" />
                  <i className="a-icon a-icon-popover" /></a>
              </span>
              <div className="a-popover-preload" id="a-popover-preloadContentMfnSellingFees">
                <div className="a-row" />
                <table className="a-bordered a-horizontal-stripes description">
                  <tbody><tr>
                    <td>
                      <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentAmazonReferralFee&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                        <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                          <span className="black tooltip">
                            Amazon Referral Fee
                              </span>
                          <i className="a-icon a-icon-popover" /></a>
                      </span>
                      <div className="a-popover-preload" id="a-popover-preloadContentAmazonReferralFee">
                        <div>
                          <span className="popoverContent">
                            Sellers pay a referral fee on each unit sold. This fee depends on the category the product belongs to and is calculated using a percentage of each unit's total price. Products in certain categories have a per-item minimum referral fee.
                              </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <input type="text" id="mfn-referral-fee" tabIndex={-1} className="a-input-text a-form-inactive readOnly" disabled="disabled" />
                    </td>
                  </tr>
                    <tr>
                      <td>
                        <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentVariableClosingFee&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                          <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                            <span className="black tooltip">
                              Variable Closing Fee
                              </span>
                            <i className="a-icon a-icon-popover" /></a>
                        </span>
                        <div className="a-popover-preload" id="a-popover-preloadContentVariableClosingFee">
                          <div>
                            <span className="popoverContent">
                              Variable Closing Fee is charged for each Media item that is sold. All sellers pay a Variable Closing Fee.
                              </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <input type="text" id="mfn-closing-fee" tabIndex={-1} className="a-input-text a-form-inactive readOnly" disabled="disabled" />
                      </td>
                    </tr>
                  </tbody></table>
              </div>
            </dd>
            <dt>
            </dt><dd>
              <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentMfnFulfillmentCost&quot;,&quot;activate&quot;:&quot;onclick&quot;,&quot;position&quot;:&quot;triggerBottom&quot;}" id="mfnFulfillmentCostPopover">
                <a id="mfn-fulfillment-cost-popover" href="javascript:void(0)" className="a-popover-trigger a-declarative display">
                  <div id="mfn-fulfillment-cost-box" className="visibleBox">
                    Click here
                    </div>
                  <i className="a-icon a-icon-popover" /></a>
              </span>
              <div className="a-popover-preload" id="a-popover-preloadContentMfnFulfillmentCost">
                <div className="a-row" />
                <div className="a-row gridRow">
                  <div data-a-input-name="mfnFulfillmentCostCheck" className="a-checkbox do-not-calc"><label><input type="checkbox" name="mfnFulfillmentCostCheck" defaultValue /><i className="a-icon a-icon-checkbox" /><span className="a-label a-checkbox-label">
                    <span className="black popoverContent">
                      I do not know my detailed fulfillment costs.
                          </span>
                  </span></label></div>
                </div>
                <div className="a-section">
                  <div className="a-row gridRow" />
                  <div id="mfnFulfillmentCostOverlay" className="a-section">
                    <table className="a-bordered a-vertical-stripes description">
                      <tbody><tr>
                        <td>
                          <span className="black font11Right">
                            Approximate Fulfillment Cost*
                              </span>
                        </td>
                        <td>
                          <input type="text" id="mfn-perUnit-fulfillment-cost" className="a-input-text borderedInput" />
                        </td>
                      </tr>
                      </tbody></table>
                    <div className="a-row gridRow" />
                    <span id="mfnOverlayMessage">
                      *Per item fulfillment cost. This typically includes the cost of storage, labor, packaging, shipment, customer service and other costs.
                      </span>
                  </div>
                  <div className="a-section">
                    <table className="a-bordered a-vertical-stripes description">
                      <tbody><tr>
                        <td>
                          <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentMFNStorageFee&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                            <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                              <span className="black tooltip">
                                Monthly storage
                                  </span>
                              <i className="a-icon a-icon-popover" /></a>
                          </span>
                          <div className="a-popover-preload" id="a-popover-preloadContentMFNStorageFee">
                            <div>
                              <span className="popoverContent">
                                Monthly cost for storing a unit of this product in the seller’s warehouse. Calculated based on volume of the product. This typically covers the fixed costs of operating a warehouse, including depreciation, utilities, and other fees.
                                  </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <input type="text" id="mfn-monthly-storage" className="a-input-text borderedInput" />
                        </td>
                      </tr>
                        <tr>
                          <td>
                            <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentLabour&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                              <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                                <span className="black tooltip">
                                  Labor
                                  </span>
                                <i className="a-icon a-icon-popover" /></a>
                            </span>
                            <div className="a-popover-preload" id="a-popover-preloadContentLabour">
                              <div>
                                <span className="popoverContent">
                                  Your per unit labor cost to process the order. This typically includes the cost of physically retrieving the unit, packaging it, and shipping it. This may also include operational labor costs, such as maintenance and security.
                                  </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <input type="text" id="mfn-labour" className="a-input-text borderedInput" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentPackagingCost&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                              <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                                <span className="black tooltip">
                                  Packaging Material
                                  </span>
                                <i className="a-icon a-icon-popover" /></a>
                            </span>
                            <div className="a-popover-preload" id="a-popover-preloadContentPackagingCost">
                              <div>
                                <span className="popoverContent">
                                  Per item material cost to prepare and package the product for shipping, including boxes, labels, dunnage.
                                  </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <input type="text" id="mfn-packaging-costs" className="a-input-text borderedInput" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentOutboundShip&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                              <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                                <span className="black tooltip">
                                  Ship to Customer
                                  </span>
                                <i className="a-icon a-icon-popover" /></a>
                            </span>
                            <div className="a-popover-preload" id="a-popover-preloadContentOutboundShip">
                              <div>
                                <span className="popoverContent">
                                  Cost of shipping the item to your customer. You may use an average to account for zone differences and service levels. FBA fees remain the same, regardless of the shipping method selected by the buyer.
                                  </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <input type="text" id="mfn-outbound-shipping" className="a-input-text borderedInput" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentCustService&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                              <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                                <span className="black tooltip">
                                  Customer Service
                                  </span>
                                <i className="a-icon a-icon-popover" /></a>
                            </span>
                            <div className="a-popover-preload" id="a-popover-preloadContentCustService">
                              <div>
                                <span className="popoverContent">
                                  Per item or per order cost of customer service and returns processing. These expenses are included in the cost of FBA.
                                  </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <input type="text" id="mfn-customer-service" className="a-input-text borderedInput" />
                          </td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
              </div>
            </dd>
            <dd className="topPadding gray">
              N/A
              </dd>
            <dd className="topPadding gray">
              N/A
              </dd>
            <dd>
              <input type="text" id="mfn-fulfillment-cost-total" tabIndex={-1} className="a-input-text a-form-inactive readonly" disabled="disabled" />
            </dd>
          </dl>
        </div>
        <div className="a-section fl fees afn-fees">
          <dl className="inputs">
            <dt>
              <span className="black bold">
                Amazon Fulfillment
                </span>
            </dt>
            <dt>
            </dt><dd>
              <input type="text" id="afn-pricing" className="a-input-text revenue" />
            </dd>
            <dd>
              <input type="text" id="afn-shipping" tabIndex={-1} className="a-input-text a-form-inactive readonly shipping" disabled="disabled" />
            </dd>
            <dd>
              <input type="text" id="afn-total-revenue" tabIndex={-1} className="a-input-text a-form-inactive readonly total-revenue" disabled="disabled" />
            </dd>
            <dd>
              <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentAfnSellingFees&quot;,&quot;activate&quot;:&quot;onclick&quot;,&quot;position&quot;:&quot;triggerBottom&quot;}">
                <a id="afn-selling-fee-popover" href="javascript:void(0)" className="a-popover-trigger a-declarative">
                  <div className="hiddenBox" id="afn-selling-fees" />
                  <i className="a-icon a-icon-popover" /></a>
              </span>
              <div className="a-popover-preload" id="a-popover-preloadContentAfnSellingFees">
                <div className="a-row" />
                <table className="a-bordered a-horizontal-stripes description">
                  <tbody><tr>
                    <td>
                      <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentAmazonReferralFee&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                        <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                          <span className="black tooltip">
                            Amazon Referral Fee
                              </span>
                          <i className="a-icon a-icon-popover" /></a>
                      </span>
                      <div className="a-popover-preload" id="a-popover-preloadContentAmazonReferralFee">
                        <div>
                          <span className="popoverContent">
                            Sellers pay a referral fee on each unit sold. This fee depends on the category the product belongs to and is calculated using a percentage of each unit's total price. Products in certain categories have a per-item minimum referral fee.
                              </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <input type="text" id="afn-referral-fee" tabIndex={-1} className="a-input-text a-form-inactive readOnly" disabled="disabled" />
                    </td>
                  </tr>
                    <tr>
                      <td>
                        <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentVariableClosingFee&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                          <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                            <span className="black tooltip">
                              Variable Closing Fee
                              </span>
                            <i className="a-icon a-icon-popover" /></a>
                        </span>
                        <div className="a-popover-preload" id="a-popover-preloadContentVariableClosingFee">
                          <div>
                            <span className="popoverContent">
                              Variable Closing Fee is charged for each Media item that is sold. All sellers pay a Variable Closing Fee.
                              </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <input type="text" id="afn-closing-fee" tabIndex={-1} className="a-input-text a-form-inactive readOnly" disabled="disabled" />
                      </td>
                    </tr>
                  </tbody></table>
              </div>
            </dd>
            <dt>
            </dt><dd className="topPadding gray">
              N/A
              </dd>
            <dd>
              <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentAfnAmazonFulfillmentFee&quot;,&quot;activate&quot;:&quot;onclick&quot;,&quot;position&quot;:&quot;triggerBottom&quot;}">
                <a id="afn-amazon-fulfillment-fees-popover" href="javascript:void(0)" className="a-popover-trigger a-declarative">
                  <div className="hiddenBox" id="afn-amazon-fulfillment-fees" />
                  <i className="a-icon a-icon-popover" /></a>
              </span>
              <div className="a-popover-preload" id="a-popover-preloadContentAfnAmazonFulfillmentFee">
                <div className="a-row" />
                <table className="a-bordered a-horizontal-stripes description">
                  <tbody><tr>
                    <td>
                      <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentAFNStorageFee&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                        <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                          <span className="black tooltip">
                            Monthly Storage
                              </span>
                          <i className="a-icon a-icon-popover" /></a>
                      </span>
                      <div className="a-popover-preload" id="a-popover-preloadContentAFNStorageFee">
                        <div>
                          <span className="popoverContent">
                            Monthly Fee for storing a unit of this product in an Amazon fulfillment center. Calculated based on volume of the product in cubic feet.
                              </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <input type="text" id="afn-monthly-storage" tabIndex={-1} className="a-input-text a-form-inactive readOnly" disabled="disabled" />
                    </td>
                  </tr>
                    <tr>
                      <td>
                        <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentFulfillmentFee&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                          <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                            <span className="black tooltip">
                              Fulfillment Fee
                              </span>
                            <i className="a-icon a-icon-popover" /></a>
                        </span>
                        <div className="a-popover-preload" id="a-popover-preloadContentFulfillmentFee">
                          <div>
                            <span className="popoverContent">
                              There will only be one Fulfillment Fee per unit, rather than a Weight Handling fee per shipment plus a separate Pick &amp; Pack fee for each unit.
                              </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <input type="text" id="afn-fulfillment-fee" tabIndex={-1} className="a-input-text a-form-inactive readOnly" disabled="disabled" />
                      </td>
                    </tr>
                  </tbody></table>
              </div>
            </dd>
            <dd>
              <input type="text" id="afn-fees-inbound-delivery" className="a-input-text fulfillment" />
            </dd>
            <dd>
              <input type="text" id="afn-fulfillment-cost" tabIndex={-1} className="a-input-text a-form-inactive readonly" disabled="disabled" />
            </dd>
          </dl>
        </div>
        <hr className="a-divider-normal fl clearLeft divider" />
      </div>
      <div id="secondHorizontalSection" className="a-section fl clearLeft">
        <div className="a-section fl">
          <dl className="labels">
            <dt>
              <div className="a-section left-align">
                <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentSellerProceeds&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                  <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                    <span className="black tooltip">
                      Seller Proceeds
                      </span>
                    <i className="a-icon a-icon-popover" /></a>
                </span>
                <div className="a-popover-preload" id="a-popover-preloadContentSellerProceeds">
                  <div>
                    <span className="popoverContent">
                      Total Revenue minus Selling on Amazon Fees, minus Total Fulfillment Costs.
                      </span>
                  </div>
                </div>
              </div>
            </dt>
            <dt>
              <div className="a-section left-align">
                <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentCostOfGoods&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                  <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                    <span className="black tooltip">
                      Cost of Product
                      </span>
                    <i className="a-icon a-icon-popover" /></a>
                </span>
                <div className="a-popover-preload" id="a-popover-preloadContentCostOfGoods">
                  <div>
                    <span className="popoverContent">
                      The cost of acquiring the product from your supplier, or the cost required to manufacture/produce a single unit.
                      </span>
                  </div>
                </div>
              </div>
            </dt>
          </dl>
        </div>
        <div className="a-section fl fees mfn-fees">
          <dl className="inputs">
            <dd>
              <input type="text" id="mfn-seller-proceeds" tabIndex={-1} className="a-input-text a-form-inactive readonly seller-proceeds" disabled="disabled" />
            </dd>
            <dd>
              <input type="text" id="mfn-cost-of-goods" className="a-input-text cost-of-goods" />
            </dd>
          </dl>
        </div>
        <div className="a-section fl fees afn-fees">
          <dl className="inputs">
            <dd>
              <input type="text" id="afn-seller-proceeds" tabIndex={-1} className="a-input-text a-form-inactive readonly seller-proceeds" disabled="disabled" />
            </dd>
            <dd>
              <input type="text" id="afn-cost-of-goods" className="a-input-text cost-of-goods" />
            </dd>
          </dl>
        </div>
        <hr className="a-divider-normal fl clearLeft divider" />
      </div>
      <div id="thirdHorizontalSection" className="a-section fl clearLeft">
        <div className="a-section fl">
          <dl className="labels">
            <dt>
              <div className="a-section left-align">
                <span className="black">
                  Net Profitability
                  </span>
              </div>
            </dt>
            <dd>
              <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentNetProfit&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                  <span className="gray bold tooltip">
                    Net Profit
                    </span>
                  <i className="a-icon a-icon-popover" /></a>
              </span>
              <div className="a-popover-preload" id="a-popover-preloadContentNetProfit">
                <div>
                  <span className="popoverContent">
                    Seller Proceeds minus Cost of Goods
                    </span>
                </div>
              </div>
            </dd>
            <dd>
              <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;preloadContentNetMargin&quot;,&quot;position&quot;:&quot;triggerRight&quot;}">
                <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                  <span className="gray bold tooltip">
                    Net Margin
                    </span>
                  <i className="a-icon a-icon-popover" /></a>
              </span>
              <div className="a-popover-preload" id="a-popover-preloadContentNetMargin">
                <div>
                  <span className="popoverContent">
                    Net Profit divided by Total Revenue (%)
                    </span>
                </div>
              </div>
            </dd>
          </dl>
        </div>
        <div className="a-section fl fees mfn-fees">
          <dl className="inputs">
            <dt>
            </dt><dd>
              <input type="text" id="mfn-net-profit" tabIndex={-1} className="a-input-text a-form-inactive readonly net-profit" disabled="disabled" />
            </dd>
            <dd>
              <input type="text" id="mfn-net-margin" tabIndex={-1} className="a-input-text a-form-inactive readonly net-margin do-not-calc" disabled="disabled" />
            </dd>
          </dl>
        </div>
        <div className="a-section fl fees afn-fees">
          <dl className="inputs">
            <dt>
            </dt><dd>
              <input type="text" id="afn-net-profit" tabIndex={-1} className="a-input-text a-form-inactive readonly net-profit" disabled="disabled" />
            </dd>
            <dd>
              <input type="text" id="afn-net-margin" tabIndex={-1} className="a-input-text a-form-inactive readonly net-margin do-not-calc" disabled="disabled" />
            </dd>
          </dl>
        </div>
        <hr className="a-divider-normal fl clearLeft divider" />
      </div>
      <div className="a-section update-feesNew">
        <span className="a-button a-button-primary update-feesNew-link"><span className="a-button-inner"><button id="update-fees-link-announce" className="a-button-text" type="button">
          Calculate</button></span></span>
      </div>
    </div>
  );
}

export default OLD