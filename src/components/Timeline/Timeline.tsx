import { ListingUpdate, ListingUpdatesResponse } from "@src/interfaces";
import "./timeline.scss";
import { daysAgo } from "@src/utils";
import { useMainContainerSize, useResponsiveDivSize } from "@src/hooks";
import { useEffect, useRef } from "react";
interface TimelineProps {
  listingUpdates: ListingUpdatesResponse;
  showTimeline: boolean;
}

export function Timeline(props: TimelineProps) {
  const { listingUpdates, showTimeline } = props;

  // const timelineRef = useRef<HTMLDivElement>(null);

  const { divRef: timelineRef, divSize: timelineDivSize } =
    useResponsiveDivSize();

  const { mainContainerSize } = useMainContainerSize();
  const showTimeLineClass = showTimeline ? "show-timeline" : "";

  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.style.width = `${mainContainerSize.width}px`;
    }
  }, [mainContainerSize]);

  return (
    <div
      ref={timelineRef}
      className={`rem-timeline-container ${showTimeLineClass}`}
    >
      {Object.keys(listingUpdates).map((key) => {
        return (
          <TimelineEventsGroup
            listingUpdates={listingUpdates[key as keyof ListingUpdatesResponse]}
          />
        );
      })}
    </div>
  );

  return (
    <div>
      <div ref={timelineRef} className="rem-timeline-container">
        {Object.keys(listingUpdates).map((key) => {
          return (
            <TimelineEventsGroup
              listingUpdates={
                listingUpdates[key as keyof ListingUpdatesResponse]
              }
            />
          );
        })}
      </div>
      <div className="rem-temp"></div>
    </div>
  );
}

interface TimelineEventProps {
  title: string;
  description: string;
  previousDescription?: string;
}

function TimelineEvent(props: TimelineEventProps) {
  const { title, description, previousDescription = "" } = props;

  const previousDescriptionText = `(${previousDescription})`;
  const previousDescriptionVisible = !!previousDescription
    ? ""
    : "hide-previous-description";

  return (
    <div className="rem-timeline-event-container">
      <h4 className="rem-timeline-event-title">{title}</h4>
      <p className="rem-timeline-event-description">{description} </p>
      <p
        className={`rem-timeline-event-previous-description ${previousDescriptionVisible}`}
      >
        {previousDescriptionText}
      </p>
    </div>
  );
}

interface TimelineEventsGroupProps {
  listingUpdates: ListingUpdate[];
}

function TimelineEventsGroup(props: TimelineEventsGroupProps) {
  const { listingUpdates } = props;

  return (
    <div className="rem-timeline-events-groups-container">
      {
        listingUpdates.map((listingUpdate) => {
          const updateDaysAgo: number = daysAgo(listingUpdate.createdDate);
          const daysAgoText =
            updateDaysAgo === 0
              ? "Today"
              : updateDaysAgo === 1
              ? "Yesterday"
              : `${updateDaysAgo} days ago`;
          return (
            <div className="rem-timeline-events-group-date-container">
              <h6 className="rem-timeline-events-group-date-text">
                {listingUpdate.createdDate}
              </h6>
              {/* <h6 className="rem-timeline-events-group-date-text">
                {listingUpdate.createdTime}
              </h6> */}
              <h6 className="rem-timeline-events-group-date-text">
                {daysAgoText}
              </h6>
            </div>
          );
        })[0]
      }
      <div className="rem-timeline-events-group-line">
        <div className="rem-timeline-events-group-dot" />
      </div>
      <div className="rem-timeline-events-group-container">
        {listingUpdates.map((listingUpdate) => {
          return (
            <TimelineEvent
              title={listingUpdate.updatedField}
              description={listingUpdate.updatedValue}
              previousDescription={listingUpdate.lastValue}
            />
          );
        })}
      </div>
    </div>
  );
}
