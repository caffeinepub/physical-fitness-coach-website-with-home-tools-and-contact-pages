import Text "mo:core/Text";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Int "mo:core/Int";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type ContactInquiry = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    createdAt : Time.Time;
  };

  module ContactInquiry {
    public func compareByTimestamp(inquiry1 : ContactInquiry, inquiry2 : ContactInquiry) : Order.Order {
      Int.compare(inquiry2.createdAt, inquiry1.createdAt);
    };
  };

  let inquiries = Map.empty<Nat, ContactInquiry>();
  var nextId = 0;

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, message : Text) : async () {
    if (Text.equal(name, "") or Text.equal(email, "") or Text.equal(message, "")) {
      Runtime.trap("All fields are required");
    };

    let newInquiry : ContactInquiry = {
      id = nextId;
      name;
      email;
      message;
      createdAt = Time.now();
    };

    inquiries.add(nextId, newInquiry);
    nextId += 1;
  };

  public query ({ caller }) func getAllInquiries() : async [ContactInquiry] {
    inquiries.values().toArray().sort(ContactInquiry.compareByTimestamp);
  };

  public query ({ caller }) func getInquiry(id : Nat) : async ContactInquiry {
    switch (inquiries.get(id)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };
};
