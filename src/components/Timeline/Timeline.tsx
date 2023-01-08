import { ListingUpdate, ListingUpdatesResponse } from "@src/interfaces";
import "./timeline.scss";
interface TimelineProps {
  listingUpdates: ListingUpdatesResponse;
  showTimeline: boolean;
}

export function Timeline(props: TimelineProps) {
  const { listingUpdates, showTimeline } = props;
  const displayTimeline = showTimeline ? "show-timeline" : "hide-timeline";

  return (
    <div className={`rem-timeline-container ${displayTimeline}`}>
      {Object.keys(listingUpdates).map((key) => {
        return (
          <TimelineEventsGroup
            listingUpdates={listingUpdates[key as keyof ListingUpdatesResponse]}
          />
        );
      })}
    </div>
  );
}

interface TimelineEventProps {
  title: string;
  description: string;
}

function TimelineEvent(props: TimelineEventProps) {
  const { title, description } = props;
  return (
    <div className="rem-timeline-event-container">
      <h4 className="rem-timeline-event-title">{title}</h4>
      <p className="rem-timeline-event-description">{description}</p>
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
          return (
            <div className="rem-timeline-events-group-date-container">
              <h6 className="rem-timeline-events-group-date-text">
                {listingUpdate.createdDate}
              </h6>
              <h6 className="rem-timeline-events-group-date-text">
                {listingUpdate.createdTime}
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
            />
          );
        })}
      </div>
    </div>
  );
}
